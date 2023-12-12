export type User = {
  address: {
    city: string;
    geo: {lat: string; lng: string};
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: String;
  id: Number;
  name: String;
  phone: String;
  username: String;
  website: String;
  albums: Album[];
};

export type Album = {
  userId: Number;
  id: Number;
  title: string;
};

export type AlbumPhoto = {
  albumId: Number;
  id: Number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
