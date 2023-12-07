import { Inter } from "next/font/google";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Tabs,
  Tab,
} from "@nextui-org/react";

import logo from "../assets/3076390-removebg-preview.png"

function TON(data: any) {
  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={55}
            radius="sm"
            src={logo.src}
            width={55}
          />
          <div className="flex flex-col">
            <p className="text-xl">Types Of Networking</p>
            <p className="text-small text-default-500">
              There are 4 types of network
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="LAN" title="LAN">
                <Card>
                  <CardBody>
                    A local area network is a computer network that
                    interconnects computers within a limited area such as a
                    residence, school, laboratory, university campus or office
                    building. By contrast, a wide area network not only covers a
                    larger geographic distance, but also generally involves
                    leased telecommunication circuits.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="WLAN" title="WLAN">
                <Card>
                  <CardBody>
                    A wireless local-area network (WLAN) is a group of colocated
                    computers or other devices that form a network based on
                    radio transmissions rather than wired connections. A Wi-Fi
                    network is a type of WLAN; anyone connected to Wi-Fi while
                    reading this webpage is using a WLAN.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="WAN" title="WAN">
                <Card>
                  <CardBody>
                    A wide-area network (WAN) is the technology that connects
                    your offices, data centers, cloud applications, and cloud
                    storage together. It is called a wide-area network because
                    it spans beyond a single building or large campus to include
                    multiple locations spread across a specific geographic area,
                    or even the world.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Bluetooth (WPAN)" title="Bluetooth (WPAN)">
                <Card>
                  <CardBody>
                    Bluetooth is a short-range wireless technology standard that
                    is used for exchanging data between fixed and mobile devices
                    over short distances and building personal area networks. In
                    the most widely used mode, transmission power is limited to
                    2.5 milliwatts, giving it a very short range of up to 10
                    metres.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://www.ictlounge.com/html/types_of_networks.htm"
          >
            Visit ICT Hub for more information, such as advantages and disadvantages of each networking types.

          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export { TON };
