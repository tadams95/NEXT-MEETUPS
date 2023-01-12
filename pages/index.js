import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTrgD6vRqkRXIPLrjDeHsExf7jAoC6VesXSgCSZ5Gyr6lYkcmzcPQ0Ca6xA7GFrgaNL",
//     address: "Some address 5, 12345 Boracay",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://cdn.sandals.com/beaches/v12/images/home/ogimages/og-beaches-turks-caicos.jpg",
//     address: "Some address 10, 12345 Turks and Caicos",
//     description: "This is a second meetup!",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Next Meetups</title>
        <meta
          name="description"
          content="Schedule and plan out your Next Meetup!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

//getServerSideProps is better for bigger projects with constantly changing data
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://tyrelle:NewPasswordForNextDemo@cluster0.csas9qx.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
