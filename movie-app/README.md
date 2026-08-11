# Movie App

TMDB APIを利用して、人気映画の一覧や映画の詳細情報を表示するReactアプリです。

## 主な機能

- 人気映画の一覧表示
- 映画タイトルによる検索
- 映画カードから詳細ページへの移動
- 映画の公開年、評価、上映時間、ジャンルなどの表示

## 使用技術

- React
- TypeScript
- Vite
- React Router
- Lucide React
- TMDB API

## セットアップ

### 1. パッケージをインストール

```bash
npm install
```

### 2. TMDB APIキーを設定

`movie-app` フォルダ直下に `.env` ファイルを作成し、TMDBのAPI Read Access Tokenを設定します。

```env
VITE_TMDB_API_KEY=ここにTMDBのトークンを入力
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ターミナルに表示されたURL（通常は `http://localhost:5173`）をブラウザで開きます。

## その他のコマンド

```bash
# 本番用にビルド
npm run build

# ビルド結果を確認
npm run preview
```

## 主なファイル

- `src/app.tsx`：映画一覧と検索画面
- `src/MovieCard.tsx`：映画1件分のカード
- `src/MovieDetail.tsx`：映画詳細画面
- `src/Header.tsx`：共通ヘッダー
- `src/main.tsx`：アプリの起動とルーティング設定

## API

映画情報には [The Movie Database (TMDB)](https://www.themoviedb.org/) のAPIを使用しています。
