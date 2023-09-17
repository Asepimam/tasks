import React, { useMemo } from "react";
import { Draggable } from "./Draggable";
import { Card } from "antd";
export const DraggableItem = ({ identifier, content }) => {
  const itemIdentifier = useMemo(() => identifier, [identifier]);
  return (
    <Draggable id={itemIdentifier}>
      <Card style={{ width: 200 }}>
        <p style={{ fontSize: 18, fontWeight: 600 }}>{content}</p>
      </Card>
    </Draggable>
  );
};
