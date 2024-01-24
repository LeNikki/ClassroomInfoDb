import Head from "next/head";
import ListOfStudents from "./ListOfStudents";
import React from "react";
import Layout from "../../components/layout";
export default function Home({ studentCpE }) {
  return (
    <div>
      <Head>
        <title>Welcome</title>
      </Head>
      <Layout />
      <ListOfStudents studentCpE={studentCpE} />
    </div>
  );
}

export async function getServerSideProps() {
  let collectionName = "English"; //we will send this as req.query.collection
  const res = await fetch(
    `http://localhost:3000/api/studentdb?collection=${collectionName}`,
    {
      method: "GET",
    }
  );
  //
  const data = await res.json();
  //we need to stringify the data from json
  return {
    props: { studentCpE: data },
  };
}
