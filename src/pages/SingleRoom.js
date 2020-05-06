import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Carousel from "../components/Carousel";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      images,
      description,
      extras,
      location,
      imagestechnical,
      imageslocation,
      logo,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        {/* <StyledHero img={mainImg || this.state.defaultBcg}>
			
			<Banner title={`${name} room`}>
				<Link to="/rooms" className="btn-primary">
					back to home page
				</Link>
			</Banner>
		</StyledHero> */}

        <section className="single-room">
          <div className="single-room-images">
            {logo.map((item, index) => {
              return <img key={index} src={item} className="locationimg" />;
            })}
          </div>
          <div className="single-room-images">
            <Carousel imagescarousel={defaultImg}></Carousel>
          </div>
          <div className="room-extras">
            <article className="desc">
              <h3>About the project</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <article className="desc">
            <h3>Technical specifications</h3>
            <p>{extras}</p>
          </article>
        </section>
        <div className="single-room-images">
          {imagestechnical.map((item, index) => {
            return <img key={index} src={item} />;
          })}
        </div>
        <section className="room-extras">
          <article className="desc">
            <h3>Location</h3>
            <p>{location}</p>
          </article>
        </section>
        <div className="single-room-images">
          {imageslocation.map((item, index) => {
            return <img key={index} src={item} className="locationimg" />;
          })}
        </div>
      </>
    );
  }
}
