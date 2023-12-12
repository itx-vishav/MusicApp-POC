import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Album, User} from '../../utils/types/userTypes';

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

interface AlbumPayload {
  albums: Album[];
  userId: Number;
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setUserAlbums: (state, action: PayloadAction<AlbumPayload>) => {
      const updatedUsers = state.users.map(user => {
        if (user.id === action.payload.userId) {
          user.albums = action.payload.albums;
          return user;
        } else return user;
      });
      state.users = updatedUsers;
    },
  },
});

export const {setUsers, setUserAlbums} = userSlice.actions;

export default userSlice.reducer;
