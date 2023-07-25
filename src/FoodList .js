import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export function Foodlist() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body >
          <Image src="f0801.jpg" width={171} height={175} roundedCircle />
        <Card.Title>หมี่กะทิ</Card.Title>
        <Card.Text>
        ลาบปลาคัง เป็นอาหารพื้นเมืองที่มีสรรพคุณต่อสุขภาพ ตามวิถีภูมิปัญญาท้องถิ่น ของจังหวัดอุบลราชธานี ที่ได้สืบทอดกันมารุ่นต่อรุ่น มีความโดดเด่นและมีความเป็นเอกลักษณ์ของจังหวัดอุบลราชธานี เป็นต้นตำรับเมนูสมุนไพรโบราณที่มีมาช้านานทั้งในเรื่องของรสชาติที่กลมกล่อม เครื่องปรุงล้วนเป็นสมุนไพรจากธรรมชาติ มีคุณค่าทางสมุนไพรสูง
        </Card.Text>
        <Button variant="secondary">เรียนรู้เพิ่มเติม</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Foodlist;