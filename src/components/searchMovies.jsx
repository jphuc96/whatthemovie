import React, { useState } from "react";
import { Form, Input, List, Divider } from "antd";
import MovieCard from "./movieCard";
const { Search } = Input;

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (e) => {
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5a982aee00ceddfb0f7efc1f305754d5&query=${e}&language=en-US&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const onFinish = (value) => {
    searchMovies(query);
  };

  return (
    <>
      <Form name="basic" onFinish={onFinish} style={{ textAlign: "center" }}>
        <Search
          placeholder="i.e Avengers: Engame"
          size="large"
          style={{ width: 400 }}
          onSearch={
            value => setQuery(value)
            }
        />
      </Form>
      <Divider />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 8,
        }}
        dataSource={movies}
        renderItem={(item) => (
          <List.Item>
            <MovieCard movie={item} />
          </List.Item>
        )}
      />
    </>
  );
}
