import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import welcomeVideo from "./videos/welcomeVideo.mp4";

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={welcomeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="row">
        <div className="col-md m-1">
          <h1 class="welcomeFont">BYTES. BREWS. GAMES.</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card>
            <CardBody>
              <CardText>
                Nerdvana does not accept reservations or call ahead seating. We
                seat on a first come, first served basis. Game on!
              </CardText>
              <CardImg
                src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/Booth-gaming-2-2048x1365.jpg"
                alt="Games at the Table"
              />
            </CardBody>
          </Card>
        </div>
        <div className="col">
          <Card>
            About @nerdvana.frisco The Ultimate Upscale Nerd Culture Experience.
            A chic gaming-themed restaurant & coffee bar that features custom
            cocktails & scratch kitchen all under one roof! Unique food &
            libations, locally roasted coffee & much more… Enjoy one of our
            handcrafted dishes while watching the latest e-sports tournament.
            Have a local craft beer while slashing through mobs at our free play
            setups or enjoy some 2 player co-op in our cockpit booths! Tabletop
            gamers rejoice, we have a huge selection of the best board games for
            you to enjoy! Don’t forget to get a custom image printed on your a
            latte or beer with our special drink printing machine! Nerdvana
            Frisco is the place to enjoy nerd passion!
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card>
            <CardText>
              NERDS KNOW BYTES All of our food is made to order in our scratch
              kitchen. quality takes time so enjoy our gaming selections while
              our nerds in the kitchen upload a one of a kind dish just for you.
            </CardText>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/shenrons-mac-_-cheese-ballz-scaled.jpg"
              alt="Food"
              className="homeImg"
            />
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardText>
              NERDS KNOW BREWS Creative cocktails, locally roasted coffee, craft
              beers and a full line of your favorite spirits. @nerdvana’s drink
              menu is made of unique handcrafted potions that showcase our nerd
              passion.
            </CardText>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/Wines.jpg"
              alt="Cocktails and Beer"
              className="homeImg"
            />
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardText>
              NERDS KNOW BREWS Creative cocktails, locally roasted coffee, craft
              beers and a full line of your favorite spirits. @nerdvana’s drink
              menu is made of unique handcrafted potions that showcase our nerd
              passion.
            </CardText>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/Booth-gaming-2-2048x1365.jpg"
              alt="Gaming at the Table"
              className="homeImg"
            />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/controller.svg"
              alt="Food"
              className="homeImg"
            />
            <CardText>
              HOURS Tues-Thurs 4pm-10pm Friday 4pm-12am Saturday 12pm-12am
              Sunday 12pm-10pm Closed Mondays
            </CardText>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/martini.svg"
              alt="Cocktails and Beer"
              className="homeImg"
            />
            <CardText>
              HAPPY HOUR Tuesday-Friday 4pm-6:30pm Half price draft beer, wine
              by the glass, & single liquor cocktails
            </CardText>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardImg
              src="https://nerdvanafrisco.com/wp-content/uploads/2020/06/fork.svg"
              alt="Gaming at the Table"
              className="homeImg"
            />
            <CardText>
              BRUNCH HOURS Saturday & Sunday 12pm-4pm $5 mimosas!
            </CardText>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
