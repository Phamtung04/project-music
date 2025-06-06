import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import RadioIcon from '@mui/icons-material/Radio';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ListItemIcon from '@mui/material/ListItemIcon';

const songsByGenre = {
  pop: [
    {
      id: 1,
      title: 'Chúng ta của hiện tại',
      artist: 'Sơn Tùng M-TP',
      plays: 1200,
      image: 'https://quocdovan12.sirv.com/IMG/songs/ChungTaCuaHienTai.jpg',
      audio: 'Music',
    },
    {
      id: 2,
      title: 'Tràn bộ nhớ',
      artist: 'Dương Domic',
      plays: 950,
      image: 'https://quocdovan12.sirv.com/IMG/songs/TranBoNho.jpg',
      audio: 'https://quocdovan12.sirv.com/Audio/TranBoNho.mp3',
    },
    {
      id: 3,
      title: 'Chăm em một đời',
      artist: 'Đức Phúc x Kai Đinh x Kewtiie',
      plays: 1100,
      image: 'https://quocdovan12.sirv.com/IMG/songs/ChamEmMotDoi.jpg',
      audio: 'https://quocdovan12.sirv.com/Audio/ChamEmMotDoi.mp3',
    },
    {
      id: 4,
      title: 'Muộn rồi mà sao còn',
      artist: 'Sơn Tùng M-TP',
      plays: 870,
      image: 'https://quocdovan12.sirv.com/IMG/songs/MuonRoiMaSaoCon.jpg',
      audio: '#',
    },
    {
      id: 5,
      title: 'Tràn bộ nhớ',
      artist: 'Dương Domic',
      plays: 950,
      image: 'https://quocdovan12.sirv.com/IMG/songs/TranBoNho.jpg',
      audio: 'https://quocdovan12.sirv.com/Audio/TranBoNho.mp3',
    },
    {
      id: 6,
      title: 'Chăm em một đời',
      artist: 'Đức Phúc x Kai Đinh x Kewtiie',
      plays: 1100,
      image: 'https://quocdovan12.sirv.com/IMG/songs/ChamEmMotDoi.jpg',
      audio: 'https://quocdovan12.sirv.com/Audio/ChamEmMotDoi.mp3',
    },
    {
      id: 7,
      title: 'Muộn rồi mà sao còn',
      artist: 'Sơn Tùng M-TP',
      plays: 870,
      image: 'https://quocdovan12.sirv.com/IMG/songs/MuonRoiMaSaoCon.jpg',
      audio: '#',
    },
    {
      id: 8,
      title: 'Em đồng ý (I Do)',
      artist: 'Đức Phúc x 911',
      plays: 1020,
      image: 'https://quocdovan12.sirv.com/IMG/songs/EmDongY.jpg',
      audio: '#',
    },
  ],
  rock: [
    {
      title: 'Rock Song 1',
      artist: 'Artist X',
      image: 'https://source.unsplash.com/200x200/?music,rock1',
    },
    {
      title: 'Rock Song 2',
      artist: 'Artist Y',
      image: 'https://source.unsplash.com/200x200/?music,rock2',
    },
    {
      title: 'Rock Song 3',
      artist: 'Artist Z',
      image: 'https://source.unsplash.com/200x200/?music,rock3',
    },
  ],
  edm: [
    {
      title: 'EDM Song 1',
      artist: 'DJ A',
      image: 'https://source.unsplash.com/200x200/?music,edm1',
    },
    {
      title: 'EDM Song 2',
      artist: 'DJ B',
      image: 'https://source.unsplash.com/200x200/?music,edm2',
    },
    {
      title: 'EDM Song 3',
      artist: 'DJ C',
      image: 'https://source.unsplash.com/200x200/?music,edm3',
    },
  ],
  jazz: [
    {
      title: 'Jazz Song 1',
      artist: 'Jazz Band A',
      image: 'https://source.unsplash.com/200x200/?music,jazz1',
    },
    {
      title: 'Jazz Song 2',
      artist: 'Jazz Band B',
      image: 'https://source.unsplash.com/200x200/?music,jazz2',
    },
    {
      title: 'Jazz Song 3',
      artist: 'Jazz Band C',
      image: 'https://source.unsplash.com/200x200/?music,jazz3',
    },
  ],
};

const options = [
  { label: 'Thêm vào danh sách phát', icon: <PlaylistAddIcon /> },
  { label: 'Lưu vào Bài hát yêu thích', icon: <FavoriteBorderIcon /> },
  { label: 'Thêm vào danh sách chờ', icon: <QueueMusicIcon /> },
  { label: 'Chuyển đến radio theo bài hát', icon: <RadioIcon /> },
  { label: 'Xem thông tin ghi công', icon: <InfoIcon /> },
  { label: 'Chia sẻ', icon: <ShareIcon /> },
];
const ITEM_HEIGHT = 55;

const GenreListPage = () => {
  const { genreName } = useParams();
  const songs = songsByGenre[genreName] || [];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="section" className="w-full h-screen">
      <Box
        sx={{
          backgroundImage: `url('https://wallpapers.com/images/hd/pop-music-u8uxqgvwhv93s9a9.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '75vw',
          height: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {genreName ? genreName.charAt(0).toUpperCase() + genreName.slice(1) : 'Unknown'} Songs
        </Typography>
      </Box>

      {songs.length > 0 ? (
        <List component="ul">
          {songs.map((song, index) => (
            <ListItem
              key={index}
              component="li"
              sx={{
                ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                justifyContent: 'space-between',
              }}
              onClick={() => console.log(song.id)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemAvatar>
                  <Avatar src={song.image} alt={song.title} />
                </ListItemAvatar>
                <ListItemText
                  primary={song.title}
                  secondary={
                    <Typography component="span" variant="body2">
                      {song.artist}
                    </Typography>
                  }
                />
              </Box>
              <Box>
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '35ch',
                        },
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" component="div" color="textSecondary">
          Không có bài hát nào trong thể loại này.
        </Typography>
      )}
    </Box>
  );
};

export default GenreListPage;
