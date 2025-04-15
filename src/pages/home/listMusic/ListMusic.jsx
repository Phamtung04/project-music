import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';

const ListMusic = ({ filteredSongs, onClickListMusic, onClickButton, favorites }) => {
  return (
    <section>
      {/* <h2 className="text-2xl font-semibold mb-4">🎵 Danh sách bài hát</h2> */}
      <Typography variant="h4">🎵 Danh sách bài hát</Typography>
      {filteredSongs.length ? (
        // grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6
        <div className="flex gap-5 overflow-x-auto overflow-hidden mt-10">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              onClick={() => onClickListMusic(song)}
              className="flex-1 min-w-[200px] bg-gray-800 mb-5 p-4 rounded-2xl shadow-lg hover:bg-gray-700 cursor-pointer transition-transform hover:scale-105 relative"
            >
              <img
                src={song.image}
                alt={song.title}
                className="h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="font-semibold text-lg truncate">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
              <button
                onClick={(e) => onClickButton(e, song)}
                className="absolute bottom-5 right-4 text-red-500 hover:scale-110"
              >
                {favorites.includes(song.id) ? (
                  <FavoriteIcon size={18} />
                ) : (
                  <FavoriteBorderIcon size={18} />
                )}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-400">Không tìm thấy bài hát phù hợp.</p>
      )}
    </section>
  );
};

export default ListMusic;
