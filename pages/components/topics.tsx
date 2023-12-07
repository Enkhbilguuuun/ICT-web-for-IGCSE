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

function Topics(data: any) {
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
            <p className="text-xl">{data.title}</p>
            <p className="text-small text-default-500">{data.desc}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
              <Tab key="concept" title="Concept">
                <Card>
                  <CardBody>
                   {data.concept}
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="usage" title="Usage">
                <Card>
                  <CardBody>
                    {data.usage}
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="operation" title="Operation">
                <Card>
                  <CardBody>
                   {data.operation}
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
            href={data.link}
          >
            Visit ICT Hub for more information.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export { Topics };

