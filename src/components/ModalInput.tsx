import { Modal, Input } from "antd";
import { styled } from "@stitches/react";
interface IModalInput {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  value: string;
  handleAddTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({
  visible,
  handleOk,
  handleCancel,
  value,
  handleAddTask,
}: IModalInput) => {
  return (
    <Modal
      title="Add Task"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <WrapperInputContent style={{ display: "flex", flexDirection: "column" }}>
        <Subtitle
          style={{
            fontSize: 18,
            fontWeight: 400,
            marginBottom: 10,
          }}
        >
          Content
        </Subtitle>
        <Input onChange={handleAddTask} value={value} />
      </WrapperInputContent>
    </Modal>
  );
};

export default ModalInput;

const Subtitle = styled("div", {
  fontSize: 18,
  fontWeight: 400,
  marginBottom: 10,
});

const WrapperInputContent = styled("div", {
  display: "flex",
  flexDirection: "column",
});
