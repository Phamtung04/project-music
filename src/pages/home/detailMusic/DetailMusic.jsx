// import { Box, Typography } from '@mui/material';
// import React, { Fragment } from 'react';

// // Sửa component để nhận song từ props
// const DetailMusic = ({ song }) => {
//   // Nếu không có song, hiển thị thông báo
//   if (!song) {
//     return <div className="text-white text-center">Không có thông tin bài hát</div>;
//   }

//   return (
//     <Fragment>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
//         <Box className="w-full md:w-1/3 flex justify-center">
//           <img
//             src={song.image}
//             alt={song.title}
//             className="rounded-lg shadow-xl max-w-full h-auto"
//           />
//         </Box>
//         <Box className="w-full md:w-2/3 ">
//           <Typography variant="h4" className="text-white mb-2">
//             {song.title}
//           </Typography>
//           <Typography variant="h6" className="text-gray-300 mb-6">
//             {song.artist}
//           </Typography>
//           <Typography variant="body1" className="text-white leading-relaxed w-full md:w-[600px]">
//             Mùa thu mang giấc mơ quay về Vẫn nguyên vẹn như hôm nào Lá bay theo gió xôn xao chốn xưa
//             anh chờ Đoạn đường ngày nào hai ta từng đón đưa Còn vấn vương không phai mờ Dấu yêu theo
//             trong vần thơ... Chúng ta... là áng mây trên trời vội vàng ngang qua Chúng ta... chẳng
//             thể nâng niu những câu thề Cứ như vậy thôi, không một lời lặng lẽ chia xa Chiều mưa bên
//             hiên vắng buồn Còn ai thương ai mong ai? Điều anh luôn giữ kín trong tim Thương em đôi
//             mắt ước nhòa Điều anh luôn giữ kín trong tim này Thương em ngồi đó khóc òa Điều anh luôn
//             giữ kín trong tim này Ngày mai nắng gió sương ngâm Có ai thương, lắng lo cho em? Điều
//             anh luôn giữ kín trong tim Thương em anh mới xin là Điều anh luôn giữ kín trong tim này
//             Thương em thì thương thôi mà Điều anh luôn giữ kín trong tim Ngày mai nắng gió sương
//             ngâm Điều anh luôn giữ kín trong tim Dù cho nắng tới, xuân thanh Anh nguyện ghi mãi
//             trong tim
//           </Typography>
//         </Box>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">

//       </div>
//     </Fragment>
//   );
// };

// export default DetailMusic;

import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react';

// Component hiển thị thông tin chi tiết bài hát
const DetailMusic = ({ song }) => {
  // Nếu không có song, hiển thị thông báo
  if (!song) {
    return <div className="text-white text-center">Không có thông tin bài hát</div>;
  }

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
        <Box className="w-full md:w-1/3 flex justify-center">
          <img
            src={song.image}
            alt={song.title}
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </Box>
        <Box className="w-full md:w-2/3 ">
          <Typography variant="h4" className="text-white mb-2">
            {song.title}
          </Typography>
          <Typography variant="h6" className="text-gray-300 mb-6">
            {song.artist}
          </Typography>
          <Typography variant="body1" className="text-white leading-relaxed w-full md:w-[600px]">
            Mùa thu mang giấc mơ quay về Vẫn nguyên vẹn như hôm nào Lá bay theo gió xôn xao chốn xưa
            anh chờ Đoạn đường ngày nào hai ta từng đón đưa Còn vấn vương không phai mờ Dấu yêu theo
            trong vần thơ... Chúng ta... là áng mây trên trời vội vàng ngang qua Chúng ta... chẳng
            thể nâng niu những câu thề Cứ như vậy thôi, không một lời lặng lẽ chia xa Chiều mưa bên
            hiên vắng buồn Còn ai thương ai mong ai? Điều anh luôn giữ kín trong tim Thương em đôi
            mắt ước nhòa Điều anh luôn giữ kín trong tim này Thương em ngồi đó khóc òa Điều anh luôn
            giữ kín trong tim này Ngày mai nắng gió sương ngâm Có ai thương, lắng lo cho em? Điều
            anh luôn giữ kín trong tim Thương em anh mới xin là Điều anh luôn giữ kín trong tim này
            Thương em thì thương thôi mà Điều anh luôn giữ kín trong tim Ngày mai nắng gió sương
            ngâm Điều anh luôn giữ kín trong tim Dù cho nắng tới, xuân thanh Anh nguyện ghi mãi
            trong tim
          </Typography>
        </Box>
      </div>
    </Fragment>
  );
};

export default DetailMusic;
