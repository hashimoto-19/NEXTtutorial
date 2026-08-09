import { useState, useEffect } from "react";
import "./app.css";
import MovieCard from "./MovieCard.tsx";

type Movie = {
  // 画面表示用の型（使うフィールドだけ）
  id: string; // number = 数値（例: 1, 123）
  original_title: string; // string = 文字列（例: "君の名は"）
  poster_path: string; // ポスター画像のパス
  overview: string; // あらすじ
  release_date: string;
};

type MovieJson = {
  // TMDB API から返ってくる映画データの型
  adult: boolean; // boolean = 真偽値（true / false）。成人向けかどうか
  backdrop_path: string; // 背景画像のパス
  genre_ids: number[]; // number[] = 数値の配列（例: [28, 12]）。ジャンルIDの一覧
  id: string; // 映画のID
  original_language: string; // 原語（例: "ja", "en"）
  original_title: string; // 原題
  overview: string; // あらすじ
  popularity: number; // 人気度スコア
  poster_path: string; // ポスター画像のパス
  release_date: string; // 公開日（例: "2016-08-26"）
  title: string; // タイトル
  video: boolean; // 動画かどうか（true / false）
  vote_average: number; // 評価の平均点
  vote_count: number; // 評価した人数
};
export function App() {
  const [keyword, setKeyword] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);

  let url = "";
  if (keyword) {
    url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ja-US&page=1`;
  } else {
    url = "https://api.themoviedb.org/3/movie/popular?language=en-ja&page=1";
  }

  const fetchMovieList = async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    });
    const data = await response.json();
    // console.log(data);
    setMovieList(
      data.results.map((movie: MovieJson) => ({
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        release_date: movie.release_date,
      })),
    );
  };
  //  画面が表示された時に実行される関数
  useEffect(() => {
    // 処理を実行する
    fetchMovieList();
    // 依存配列
  }, [keyword]);
  const heroMovie = movieList[0];
  const heroTitle = heroMovie?.original_title;
  const heroYear = heroMovie?.release_date;

  const heroOverview =
    "1,000年に1度のすい星来訪が、1か月後に迫る日本。山々に囲まれた田舎町に住む女子高生の三葉は、町長である父の選挙運動や、家系の神社の風習などに鬱屈（うっくつ）していた。それゆえに都会への憧れを強く持っていたが、ある日彼女は自分が都会に暮らしている少年になった夢を見る。夢では東京での生活を楽しみながらも、その不思議な感覚に困惑する三葉。一方、東京在住の男子高校生・瀧も自分が田舎町に生活する少女になった夢を見る。やがて、その奇妙な夢を通じて彼らは引き合うようになっていくが……。";
  const heroImage =
    "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yLglTwyFOUZt5fNKm0PWL1PK5gm.jpg";

  return (
    <>
      <div>
        <section className="hero-section">
          {heroImage && (
            <>
              <img
                className="hero-section-bg"
                src={heroImage}
                alt={heroTitle}
              />
              <div className="hero-section-gradient" />
            </>
          )}
          <div className="hero-section-content">
            <h1 className="hero-section-title">{heroTitle}</h1>
            <div className="hero-section-badges">
              <span className="hero-section-badge">{heroYear}</span>
            </div>
            {heroOverview && (
              <p className="hero-section-overview">{heroOverview}</p>
            )}
          </div>
        </section>
        <div className="app-search-wrap">
          <input
            type="text"
            className="app-search"
            placeholder="映画タイトルで検索..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <section className="movie-row-section">
          <h2 className="movie-row-title">
            {keyword ? `「${keyword}」の検索結果` : "人気映画"}
          </h2>
          <div className="movie-row-scroll">
            {movieList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
