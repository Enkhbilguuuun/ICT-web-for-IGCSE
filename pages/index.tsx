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
} from "@nextui-org/react";

import Bigpic from "./assets/3076390-removebg-preview.png";
import { Topics } from "./components/topics";
import { TON } from "./components/typesofnetwork";
import {Fooot} from "./components/fooot";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        {" "}
        <Navbar
          style={{
            backgroundColor: "#5b7c99",
            borderBottomWidth: 2,
            borderBlockColor: "yellow",
          }}
          isBordered
          position="sticky"
          
        >
          <NavbarBrand>
            <p
              className="font-bold text-inherit"
              style={{ color: "yellow", fontSize: 30, position:"absolute", top:49, }}
            >
              Web and Network
            </p>
          </NavbarBrand>
          <NavbarContent
            className="md:flex gap-4"
            justify="center"
          ></NavbarContent>
        </Navbar>
      </div>
      <div style={{
        height:80,
        width:"100%",
        backgroundColor:"#adcad6",
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6
      }}>

      </div>
      <div>
        <div style={{ position: "relative" }}>
          <div>
            <Image
              style={{
                height: "100%",
                width: "100%",
                zIndex:1,
               
              }}
              
              shadow="md"
              width={"100%"}
              height={200}
              alt="NextUI hero Image with delay"
              src="https://cdn.ttgtmedia.com/rms/onlineimages/map_globe_g171330891.jpg"
            />
          </div>
          <Card
            style={{
              height: 300,
              width: "50%",
              backgroundColor: "red",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: 7,
              flexDirection:"row",
              placeContent:"space-around"
            }}
          >
            <div style={{
              zIndex:3,
              color:"yellow",
              fontSize:35,
              height:300,
              display:"flex",
              placeContent:"space-evenly",
              flexDirection:"column",
              
            }} >
              <p>Internet</p>
              <hr />
              <p>Intranet</p>
              <hr />
              <p> WebBrowsers (WWW)</p>
              <hr />
              <p>Network Types</p>
              <hr />
            </div>
            
          </Card>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
            placeContent: "space-around",
          }}
        >
          <div
            style={{
              width: 900,
              padding: 25,
            }}
          >
            <Topics
              title="Internet"
              desc=" worldwide system of computer networks"
              concept="The Internet is a complex network of interconnected networks governed by protocols and standards. The foundation of the Internet is built on a protocol called IP (Internet Protocol). IP provides a set of rules that govern how data is transmitted across networks."
              usage="It supports human communication via social media, electronic mail (e-mail), “chat rooms,” newsgroups, and audio and video transmission and allows people to work collaboratively at many different locations. It supports access to digital information by many applications, including the World Wide Web."
              operation="Computers connect to each other and to the Internet via wires, cables, radio waves, and other types of networking infrastructure. All data sent over the Internet is translated into pulses of light or electricity, also called 'bits,' and then interpreted by the receiving computer."
              link="https://www.ictlounge.com/html/internet_intranet.htm"
            ></Topics>
          </div>
          <Image
            width={470}
            height={400}
            shadow="lg"
            alt="NextUI hero Image"
            src="https://img.freepik.com/premium-photo/night-earth-global-virtual-internet-world-connection-metaverse-technology-network-digital-communication-worldwide-networking-connect-3d-background-elements-this-image-furnished-by-nasa_79161-2039.jpg"
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexDirection: "row",
            placeContent: "space-around",
          }}
        >
          <Image
            width={500}
            height={400}
            shadow="lg"
            alt="NextUI hero Image"
            src="https://www.concretecms.com/application/files/9916/5452/6386/intranet_blog_head.jpg"
          />
          <div
            style={{
              width: 700,
              padding: 25,
            }}
          >
            <Topics
              title="Intranet"
              desc="A private network contained within an enterprise that is used to securely share company information and computing resources among employees."
              concept="An intranet is a private network contained within an enterprise that is used to securely share company information and computing resources among employees. An intranet can also be used for working in groups and teleconferences. Intranets encourage communication within an organization."
              usage="An intranet software allows companies to build a private, secure network that can only be accessed by that company's employees. This intranet is the portal for employees to access internal and external resources and enables workers to communicate, collaborate, and share documents and other information."
              operation="An intranet is a private network that is contained within an enterprise. It uses the same Internet Protocol (IP) standards and Transmission Control Protocol/Internet Protocol (TCP/IP) infrastructure as the public Internet, but its access is restricted to authorized users."
              link="https://www.ictlounge.com/html/internet_intranet.htm"
            ></Topics>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
          }}
        >
          <div
            style={{
              width: 900,
              padding: 25,
            }}
          >
            <Topics
              title="World Wide Web"
              desc=" A system of interconnected public webpages accessible through the Internet."
              concept="The World Wide Web -- also known as the web, WWW or W3 -- refers to all the public websites or pages that users can access on their local computers and other devices through the internet. These pages and documents are interconnected by means of hyperlinks that users click on for information."
              usage="The Web has become the world's dominant information systems platform. It is the primary tool billions of people worldwide use to interact with the Internet."
              operation="The web browser connects to the web server and sends an HTTP request (via the protocol stack) for the desired web page. The web server receives the request and checks for the desired page. If the page exists, the web server sends it. If the server cannot find the requested page, it will send an HTTP 404 error message."
              link="https://www.ictlounge.com/html/networks_introduction.htm"
            ></Topics>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexDirection: "row",
            placeContent: "space-around",
          }}
        >
          <Image
            width={480}
            height={400}
            shadow="lg"
            alt="NextUI hero Image"
            src="https://png.pngtree.com/background/20230525/original/pngtree-an-image-of-a-globe-filled-with-circles-of-technology-picture-image_2737318.jpg"
          />
          <div
            style={{
              width: 800,
              padding: 25,
            }}
          >
            <TON></TON>
          </div>
        </div>
        <Fooot></Fooot>
      </div>
    </main>
  );
}
