import { Card, Typography } from "antd";
import { Droppable } from "./Droppable";
import { DraggableItem } from "./DraggableItem";
import { useMemo } from "react";
import * as _ from "radash";
const { Title } = Typography;

const Column = ({ heading, elements }) => {
  const columnIndetifier = useMemo(() => _.camal(heading), [heading]);
  const counts = useMemo(
    () => elements.filter((elm) => elm.column === columnIndetifier).length,
    [elements, columnIndetifier]
  );
  const styleHead = (title) => {
    switch (title) {
      case "To Do":
        return { backgroundColor: "#f0f2f5" };
      case "In Progress":
        return { backgroundColor: "#e8f5e9" };
      case "Done":
        return { backgroundColor: "#e3f2fd" };
      default:
        return { backgroundColor: "#f0f2f5" };
    }
  };
  return (
    <Card
      title={<Title level={4}>{heading}</Title>}
      extra={<span>{counts}</span>}
      style={{ width: 300 }}
      headStyle={{ backgroundColor: styleHead(heading).backgroundColor }}
    >
      <Droppable id={columnIndetifier}>
        {elements.map((elm) => (
          <DraggableItem
            key={`draggable-item-${elm.id}-${columnIndetifier}`}
            identifier={elm.id}
            content={elm.content}
          />
        ))}
      </Droppable>
    </Card>
  );
};

export default Column;
