import React from "react";
import "antd/dist/antd.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export default function App() {
  const dataSource = [
    { id: 1, label: "tab 1", children: <div>this is tab 1</div> },
    { id: 2, label: "tab 2", children: <div>this is tab 2</div> },
    { id: 3, label: "tab 3", children: <div>this is tab 3</div> },
    { id: 4, label: "tab 4", children: <div>this is tab 4</div> }
  ];
  return (
    <Tabs>
      {dataSource.map((item) => (
        <TabPane tab={item.label} key={item.id}>
          {item.children}
        </TabPane>
      ))}
    </Tabs>
  );
}
