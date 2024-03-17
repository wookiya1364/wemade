import {
  Communicate,
  Facebook,
  Row,
  Telegram,
  Twitter,
  UnaMessenger,
  Youtube,
} from "@shared/index";

export default function Channel() {
  return (
    <Row className="w-1/2 justify-end">
      <ul className="w-[300px] flex justify-around">
        <li>
          <UnaMessenger />
        </li>
        <li>
          <Communicate />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <Facebook />
        </li>
        <li>
          <Telegram />
        </li>
        <li>
          <Youtube />
        </li>
      </ul>
    </Row>
  );
}
