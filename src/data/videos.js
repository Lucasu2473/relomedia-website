const supabaseVideoBaseUrl =
  "https://auth.primelife.one/storage/v1/object/public/relomedia-videos";

const assetPath = (name) => `${supabaseVideoBaseUrl}/${encodeURIComponent(name)}`;
const posterPath = (name) => `/video-posters/${encodeURIComponent(name)}`;

export const videos = [
  {
    title: "Video 1",
    category: "Long-form example",
    format: "wide",
    url: assetPath("1.mp4"),
    poster: posterPath("1.jpg"),
  },
  {
    title: "Video 2",
    category: "Long-form example",
    format: "wide",
    url: assetPath("2.MP4"),
    poster: posterPath("2.jpg"),
  },
  {
    title: "Video 3",
    category: "Long-form example",
    format: "wide",
    url: assetPath("3.MP4"),
    poster: posterPath("3.jpg"),
  },
  {
    title: "Video 4",
    category: "Long-form example",
    format: "wide",
    url: assetPath("4.MOV"),
    poster: posterPath("4.jpg"),
  },
  {
    title: "Video 5",
    category: "Long-form example",
    format: "wide",
    url: assetPath("5.mp4"),
    poster: posterPath("5.jpg"),
  },
  {
    title: "Video 6",
    category: "Long-form example",
    format: "wide",
    url: assetPath("6.mp4"),
    poster: posterPath("6.jpg"),
  },
  {
    title: "Video 7",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("7.mp4"),
    poster: posterPath("7.jpg"),
  },
  {
    title: "Video 8",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("8.mp4"),
    poster: posterPath("8.jpg"),
  },
  {
    title: "Video 9",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("9.mp4"),
    poster: posterPath("9.jpg"),
  },
  {
    title: "Video 10",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("10.mp4"),
    poster: posterPath("10.jpg"),
  },
  {
    title: "Video 11",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("11.mp4"),
    poster: posterPath("11.jpg"),
  },
  {
    title: "Video 12",
    category: "Vertical edit",
    format: "vertical",
    url: assetPath("12.mp4"),
    poster: posterPath("12.jpg"),
  },
  {
    title: "Video 13",
    category: "Long-form example",
    format: "wide",
    url: assetPath("13.mp4"),
    poster: posterPath("13.jpg"),
  },
  {
    title: "Video 14",
    category: "Long-form example",
    format: "wide",
    url: assetPath("14.mp4"),
    poster: posterPath("14.jpg"),
  },
  {
    title: "Video 15",
    category: "Long-form example",
    format: "wide",
    url: assetPath("15.mp4"),
    poster: posterPath("15.jpg"),
  },
  {
    title: "Video 16",
    category: "Long-form example",
    format: "wide",
    url: assetPath("16.mp4"),
    poster: posterPath("16.jpg"),
  },
];

export const portfolioPreview = [videos[0], videos[7], videos[13]];
