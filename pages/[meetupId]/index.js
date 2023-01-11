import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTrgD6vRqkRXIPLrjDeHsExf7jAoC6VesXSgCSZ5Gyr6lYkcmzcPQ0Ca6xA7GFrgaNL"
      title="A First Meetup"
      address="Some address 5, 12345 Boracay"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTrgD6vRqkRXIPLrjDeHsExf7jAoC6VesXSgCSZ5Gyr6lYkcmzcPQ0Ca6xA7GFrgaNL",
        id: meetupId,
        title: "A First Meetup",
        address: "Some address 5, 12345 Boracay",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
