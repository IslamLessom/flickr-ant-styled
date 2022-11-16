import React from 'react'

import { Collapse } from 'antd';

const { Panel } = Collapse;

function Faq() {
  return (
    <div className='faq'>
      <Collapse defaultActiveKey={['1']} >
        <Panel header="This is panel header 1" key="1">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 1" key="4">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 2" key="5">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 3" key="6">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 1" key="7">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 2" key="8">
          <p>This is panel header 3</p>
        </Panel>
        <Panel header="This is panel header 3" key="9">
          <p>This is panel header 3</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Faq