import "@fontsource/anek-telugu";
import { useCallback, useEffect, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "@stitches/react";
import { Layout, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Column, IElement } from "../components";
import { FetchUser, fetchLogout } from "../helpers/fetch";
import ModalInput from "../components/ModalInput";
import * as _ from "radash";

const { Header, Content } = Layout;
const { Title } = Typography;

const COLUMNS = ["Backlog", "In Progress", "In Review", "Done"];
export const DEFAULT_COLUMN = "backlog";

const DEFAULT_DATA_STATE: IElement[] = [
  {
    id: _.uid(6),
    content: "Hello world 1",
    column: DEFAULT_COLUMN,
  },
  {
    id: _.uid(6),
    content: "Hello world 2",
    column: DEFAULT_COLUMN,
  },
];
interface ResponseLogin {
  messageId: string;
  name: string;
}
const Tasks = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IElement[]>(DEFAULT_DATA_STATE);
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [userLogin, setUserLogin] = useState<ResponseLogin>(
    {} as ResponseLogin
  );
  console.log("userLogin", userLogin);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await FetchUser();
        setUserLogin(user);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Tindakan yang sesuai ketika terjadi kesalahan
      }
    };
    if (userLogin.messageId === "invalid_token") {
      navigate("/auth");
    }
    fetchData();
  }, [navigate, userLogin]);

  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column;
          return { ...elm, column };
        }
        return elm;
      });

      setData(updatedState);
    },
    [data, setData]
  );

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    const deepCopy = [...data];
    const newData = {
      id: _.uid(6),
      content: value,
      column: DEFAULT_COLUMN,
    };
    deepCopy.push(newData);
    setData(deepCopy);
    setValue("");
  };
  const handleCancel = () => {
    setVisible(false);
    setValue("");
  };
  const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title style={{ color: "#fff" }} level={3}>
          Wellcome {userLogin.name} 🎉
        </Title>
        <WrrapButton>
          <Button onClick={showModal} style={{ marginRight: 10 }}>
            Add Task
          </Button>
          <Button
            type="primary"
            onClick={fetchLogout}
            style={{ marginRight: 10 }}
          >
            Logout
          </Button>
        </WrrapButton>
      </Header>
      <Content>
        <ModalInput
          visible={visible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          value={value}
          handleAddTask={handleAddTask}
        />
        <DndContext onDragEnd={handleOnDragEnd}>
          <MainWrapper>
            {COLUMNS.map((column, columnIndex) => (
              <Column
                key={`column-${column}`}
                heading={column}
                elements={_.select(
                  data,
                  (elm) => elm,
                  (f) => f.column === _.camal(column)
                )}
              />
            ))}
          </MainWrapper>
        </DndContext>
      </Content>
    </Layout>
  );
};
export default Tasks;

const MainWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: 40,
  backgroundColor: "#213547",
  paddingBottom: 40,
  fontFamily: "Anek Telugu",
  height: "90vh",
});

const WrrapButton = styled("div", {
  display: "flex",
  flexDirection: "row",
});
