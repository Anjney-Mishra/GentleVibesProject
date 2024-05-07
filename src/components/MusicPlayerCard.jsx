import React from "react";
import {Button, Card, CardBody, Image} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function MusicPlayerCard() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 mt-3 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={50}
              shadow="md"
              src="heroimage.png"
              width="100%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-foreground/90">White Noise 1</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi aliquid velit aut? Consequatur assumenda voluptatem ex cum ipsum. Dignissimos, eveniet!</p>
                <Button href="https://youtu.be/G3y4EtFXu2o?si=eEiAFZq3EvIOD6jX" color="secondary">Play</Button>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
