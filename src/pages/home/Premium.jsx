import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Nghe nhạc không quảng cáo', '__', <CheckCircleIcon />),
  createData('Tải xuống để nghe không cần mạng', '__', <CheckCircleIcon />),
  createData('Phát nhạc theo thứ tự bất kỳ', '__', <CheckCircleIcon />),
  createData('Chất lượng âm thanh cao', '__', <CheckCircleIcon />),
  createData('Nghe cùng bạn bè theo thời gian thực', '__', <CheckCircleIcon />),
  createData('Sắp xếp danh sách chờ nghe', '__', <CheckCircleIcon />),
];

const Premium = () => {
  return (
    <div style={{ backgroundColor: '#111827' }}>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <div
            className="w-full p-10 text-white"
            style={{
              background: 'linear-gradient(to left, #9810fa, #3B82F6)',
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
            }}
          >
            <h1 className="text-3xl">
              Nghe không giới hạn. <br /> Dùng thử gói Premium trong <br />
              hai tháng chỉ với giá 59.000đ <br />
              <p className="text-xl">Sau đó chỉ với 59.000đ/tháng. Hủy bất cứ lúc nào</p>
            </h1>
            <Stack direction="row" spacing={2} sx={{ flex: 1, mt: 4 }}>
              <Button
                variant="contained"
                sx={{ background: 'oklch(0.905 0.182 98.111)', borderRadius: 50 }}
              >
                Mua Premium Individual
              </Button>
              <Button variant="contained" sx={{ background: 'black', borderRadius: 50 }}>
                Xem tất cả các gói
              </Button>
            </Stack>
            <p className="text-sm">
              59.000đ cho 2 tháng, sau đó là 59.000đ/tháng. Chỉ ưu đã nếu bạn chưa sửa dụng gói
              Premium.
            </p>
          </div>
          <div className="pt-10 w-4/5 text-center" style={{ margin: 'auto' }}>
            <h3 className="text-3xl">Trải nghiệm sự khác biệt</h3>
            <p className="mt-2">
              Dùng Premium để để lắm toàn quyền kiểm soát trải nghiệm nghe nhạc. Hủy bất cứ lúc nào.
            </p>

            <div className="mt-10 max-w-xl mx-auto">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} aria-label="simple table  ">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ width: '170px' }}>Lơi ích dành cho bạn</TableCell>
                      <TableCell sx={{ width: '170px' }} align="right">
                        Gói Free
                      </TableCell>
                      <TableCell sx={{ width: '170px' }} align="right">
                        Gói premium
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="mt-10 max-w-xl mx-auto">
              <h3 className="text-3xl">Gói hợp túi tiền trong mọi hoàn cảnh</h3>
              <p className="mt-2">
                Chọn gói Premium để nghe nhạc không quảng cáo thỏa thích trên điện thoại, loa và các
                thiết bị khác. Thanh toan theo nhiều cách. Hủy bất cứ lúc nào.
              </p>
            </div>

            <div className="flex justify-center mt-10">
              <h3 className="text-3xl my-auto">Lợi ích của các gọi Premium</h3>
              <div>
                <ul className="float-left ml-10 text-left">
                  <li>Nghe nhạc không quảng cáo</li>
                  <li>Tại xuống để nghe nhạc không cần mạng</li>
                  <li>Phát nhạc theo thứ tự bất kỳ</li>
                  <li>Chất lượng âm nhạc cao</li>
                  <li>Sắp xếp danh sách chờ nghe</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 max-w-4xl mx-auto flex justify-center text-left">
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    Premium
                  </Typography>
                  <Typography>Mini</Typography>
                  <Typography variant="p" component="div">
                    <Box
                      component="span"
                      // sx={{mb: 10}}
                    >
                      10.500đ/tuần
                    </Box>
                  </Typography>
                  <Typography sx={{ height: 130, mt: 5 }} variant="body2">
                    <ul>
                      <li>1 tài khoản premium chỉ dành cho một thiết bị di động</li>
                      <li>Nghe tối đa 30 bài hát trên một thiết bị di động khi không có mạng</li>
                      <li>Thanh toán một lần</li>
                      <li>Chất lượng âm thanh cơ bản</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(to left, #9810fa, #3B82F6)',
                      borderRadius: 50,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Mua Premium Mini
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ minWidth: 275, ml: 5 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    Premium
                  </Typography>
                  <Typography>Mini</Typography>
                  <Typography variant="p" component="div">
                    <Box
                      component="span"
                      // sx={{ }}
                    >
                      10.500đ/tuần
                    </Box>
                  </Typography>
                  <Typography sx={{ height: 130, mt: 5 }} variant="body2">
                    <ul>
                      <li>1 tài khoản Premium </li>
                      <li>Hủy bất cứ lúc nào</li>
                      <li>Đăng ký hoặc thanh toán một lần</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(to left, #9810fa, #3B82F6)',
                      borderRadius: 50,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Mua Premium Mini
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ minWidth: 275, ml: 5 }}>
                <CardContent>
                  <Typography gutterBottom sx={{ fontSize: 14 }}>
                    Premium
                  </Typography>
                  <Typography>Mini</Typography>
                  <Typography variant="p" component="div">
                    <Box
                      component="span"
                      // sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
                    >
                      10.500đ/tuần
                    </Box>
                  </Typography>
                  <Typography sx={{ height: 130, mt: 5 }} variant="body2">
                    <ul>
                      <li>1 tài khoản premium đã xác minh</li>
                      <li>Giảm giá cho sinh viên đử điều kiện</li>
                      <li>Hủy bất cứ lúc nào</li>
                      <li>Đăng ký hoặc thanh toán một lần</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(to left, #9810fa, #3B82F6)',
                      borderRadius: 50,
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Mua Premium Mini
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </Stack>
      </Box>
      <div className='bg-gradient-to-r from-purple-600 to-blue-500 rounded-b-3xl shadow-lg h-10 mt-10'>

            </div>
    </div>
  );
};

export default Premium;
