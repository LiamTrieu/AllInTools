import { useInput } from '@app/hook';
import { Col, Input, Row } from 'antd';

export default function Compare() {
  const oldText = useInput('');
  const newText = useInput('');

  return (
    <div>
      <Row>
        <Col span={12}>
          <Input.TextArea className="text" rows={10} placeholder="old text..." {...oldText} />
        </Col>
        <Col span={12}>
          <Input.TextArea className="text" rows={10} placeholder="new text..." {...newText} />
        </Col>
      </Row>
    </div>
  );
}
