import { Box, Flex } from "@chakra-ui/react";
import { Picture } from "src/organisms/Picture";

interface ThemeProps {
  Theme: string;
}

const Theme = () => {
  const gridProps = [
    ["tomato", "tomato", "tomato", "tomato", "papayawhip"],
    ["papayawhip", "papayawhip", "papayawhip", "papayawhip", "papayawhip"],
  ];

  return (
    <Flex justify="center" align="center">
      <Box>
        <h1>どちらがより</h1>
        <Flex>
          <Picture pictureColors={gridProps}></Picture>
          <Picture pictureColors={gridProps}></Picture>
        </Flex>
      </Box>
    </Flex>
  );
};

// // pages/posts/[id].js

// function Post({ post }) {
//   // 記事をレンダリングします...
// }

// // この関数はビルド時に呼び出されます。
// export async function getStaticPaths() {
//   // 外部APIエンドポイントを呼び出して記事を取得します。
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // 記事に基づいてプリレンダリングしたいパスを取得します
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // ビルド時にこれらのパスだけをプリレンダリングします。
//   // { fallback: false } は他のルートが404になることを意味します。
//   return { paths, fallback: false };
// }

// // ビルド時にも呼び出されます。
// export async function getStaticProps({ params }) {
//   // paramsは記事の`id`を含みます。
//   // ルートが/posts/1のような時、params.id は1です。
//   const res = await fetch(`https://.../posts/${params.id}`);
//   const post = await res.json();

//   // 記事データをprops経由でページに渡します。
//   return { props: { post } };
// }

// export default Post;

const rounds = [
  {
    games: [
      {
        id: 1,
        next: 3,
        player1: { id: "1", name: "Competitor 1", winner: false },
        player2: { id: "4", name: "Competitor 4", winner: true },
      },
      {
        id: 2,
        next: 3,
        player1: { id: "5", name: "Competitor 5", winner: false },
        player2: { id: "8", name: "Competitor 8", winner: true },
      },
    ],
  },
  {
    games: [
      {
        player1: { id: "4", name: "Competitor 4", winner: true },
        player2: { id: "8", name: "Competitor 8", winner: false },
      },
    ],
  },
  {
    games: [
      {
        player1: { id: "4", name: "Competitor 4", winner: true },
        player2: { id: "8", name: "Competitor 8", winner: false },
      },
    ],
  },
  {
    games: [
      {
        player1: { id: "4", name: "Competitor 4", winner: true },
        player2: { id: "8", name: "Competitor 8", winner: false },
      },
    ],
  },
];
// トーナメントを決行　それぞれの５回対戦
