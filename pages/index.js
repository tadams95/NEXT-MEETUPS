import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTrgD6vRqkRXIPLrjDeHsExf7jAoC6VesXSgCSZ5Gyr6lYkcmzcPQ0Ca6xA7GFrgaNL",
    address: "Some address 5, 12345 Boracay",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.sandals.com/beaches/v12/images/home/ogimages/og-beaches-turks-caicos.jpg",
    address: "Some address 10, 12345 Turks and Caicos",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
