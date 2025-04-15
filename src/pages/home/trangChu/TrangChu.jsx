import React, { useEffect, useRef, useState } from 'react';
// import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaHeart, FaRegHeart } from 'react-icons/fa';\

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ListMusic from '../listMusic/ListMusic';
import MusicGenreList from '../../categoryList/MusicGenreList';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DetailMusic from '../detailMusic/DetailMusic';
import DetailMusicContainer from '../detailMusic/DetailMusicContainer';
// import { Typography } from '@mui/material';

const TrangChu = () => {
  const [greeting, setGreeting] = useState('');

  // State cho tìm kiếm, bài hát hiện tại, trạng thái phát, âm lượng, thời gian và chế độ phát
  const [search, setSearch] = useState('');
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playMode, setPlayMode] = useState('normal'); // normal | shuffle | repeat
  const [favorites, setFavorites] = useState([]);

  const audioRef = useRef(new Audio());

  // Lời chào theo thời gian trong ngày
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12
        ? 'Buổi sáng phấn khởi cùng My Music!'
        : hour < 18
          ? 'Buổi chiều thư giãn cùng My Music!'
          : 'Buổi tối cháy lửa cùng My Music!',
    );
  }, []);

  // Quản lý phát nhạc, thời gian, âm lượng, và sự kiện kết thúc bài hát
  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', setAudioDuration);
    audio.addEventListener('ended', handleSongEnd);

    if (currentSong) {
      audio.src = currentSong.audio;
      isPlaying ? audio.play() : audio.pause();
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', setAudioDuration);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [currentSong, isPlaying, volume, playMode]);

  // Danh sách bài hát mẫu
  const songs = [
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
  ];

  console.log(songs);

  // Lọc bài hát theo tìm kiếm
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(search.toLowerCase()) ||
      song.artist.toLowerCase().includes(search.toLowerCase()),
  );

  // Định dạng thời gian phát nhạc
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Xử lý tua bài hát
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Xử lý khi bài hát kết thúc
  const handleSongEnd = () => {
    if (playMode === 'repeat') {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else if (playMode === 'shuffle') {
      playRandomSong();
    } else {
      playNext();
    }
  };

  // Phát bài hát kế tiếp
  const playNext = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  // Phát bài hát trước đó
  const playPrev = () => {
    if (!currentSong) return;
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  // Phát bài hát ngẫu nhiên
  const playRandomSong = () => {
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(randomSong);
    setIsPlaying(true);
  };

  // Thêm hoặc xoá bài hát yêu thích
  const toggleFavorite = (song) => {
    setFavorites((prev) =>
      prev.includes(song.id) ? prev.filter((id) => id !== song.id) : [...prev, song.id],
    );
  };

  // Chuyển chế độ phát (bình thường, ngẫu nhiên, lặp lại)
  const cyclePlayMode = () => {
    setPlayMode((prev) =>
      prev === 'normal' ? 'shuffle' : prev === 'shuffle' ? 'repeat' : 'normal',
    );
  };

  const playModeIcon = playMode === 'shuffle' ? '🔀' : playMode === 'repeat' ? '🔁' : '▶️';

  const onClickListMusic = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const onClickButton = (e) => {
    e.stopPropagation();
    toggleFavorite(songs);
  };

  // Thêm state mới để quản lý modal
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Các hàm và logic hiện tại...

  // Hàm mở/đóng modal
  const toggleDetailModal = () => {
    setIsDetailModalOpen(!isDetailModalOpen);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start text-white overflow-hidden">
      {/* Lời chào */}
      <section className="w-full flex flex-col items-center text-center mb-8 px-4 py-6 bg-gradient-to-r from-purple-600 to-blue-500 rounded-b-3xl shadow-lg">
        <h2 className="text-4xl font-bold mb-3 animate-pulse">{greeting}</h2>
        <p className="text-lg">
          Chào mừng bạn đến với <span className="font-semibold text-yellow-300">My Music</span> -
          Nơi âm nhạc thăng hoa.
        </p>
      </section>

      <div className="w-full max-w-5xl px-4 flex flex-col gap-10">
        {/* Ô tìm kiếm */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔎 Tìm kiếm bài hát hoặc nghệ sĩ..."
            className="w-full max-w-lg p-3 rounded-2xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Danh sách bài hát */}
        <ListMusic
          filteredSongs={filteredSongs}
          onClickListMusic={onClickListMusic}
          onClickButton={onClickButton}
          favorites={favorites}
        />

        {/* Danh sách thể loại nhạc */}
        <MusicGenreList />
      </div>

      {/* Trình phát nhạc */}
      {currentSong && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 opacity-75 text-white p-4 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-lg z-50">
          <div className="flex items-center justify-between w-full">
            {/* Thông tin bài hát - thêm onClick để mở modal */}
            <div
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg"
              onClick={toggleDetailModal}
            >
              <img
                src={currentSong.image}
                alt={currentSong.title}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-sm truncate w-40">{currentSong.title}</h4>
                <p className="text-xs text-gray-400 truncate w-40">{currentSong.artist}</p>
              </div>
            </div>

            {/* Điều khiển phát nhạc */}
            <div className="flex items-center gap-3">
              <button onClick={cyclePlayMode} className="hover:text-yellow-400 text-lg">
                {playModeIcon}
              </button>
              <button onClick={playPrev} className="hover:text-yellow-400">
                <SkipPreviousIcon size={16} />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-green-400">
                {isPlaying ? <PauseIcon size={20} /> : <PlayArrowIcon size={20} />}
              </button>
              <button onClick={playNext} className="hover:text-yellow-400">
                <SkipNextIcon size={16} />
              </button>
            </div>
          </div>

          {/* Thanh tua thời gian */}
          <div className="flex items-center w-full gap-2 mt-2">
            <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full"
            />
            <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
          </div>

          {/* Điều chỉnh âm lượng */}
          <div className="flex items-center gap-2 mt-2">
            <VolumeUpIcon size={14} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
      )}

      {/* Modal hiển thị chi tiết bài hát */}
      {isDetailModalOpen && currentSong && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl w-11/12 max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDetailModal}
                className="text-white hover:text-yellow-400 text-2xl"
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <DetailMusic song={currentSong} />
            </div>
          </div>
        </div>
      )}

      {isDetailModalOpen && currentSong && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 pl-[250px]">
          <DetailMusicContainer song={currentSong} onClose={toggleDetailModal} />
        </div>
      )}
      <footer className="w-full mt-10 py-4 bg-gray-800 text-center text-sm text-gray-400">
        My Music
      </footer>
    </div>
  );
};

export default TrangChu;
