// import React from 'react';
// import DetailMusic from './DetailMusic';

// const DetailMusicContainer = ({ song, onClose }) => {
//   return (
//     <div className="bg-gray-800 rounded-xl w-11/12 max-w-6xl max-h-[90vh]">
//       <div className="flex justify-end p-4">
//         <button onClick={onClose} className="text-white hover:text-yellow-400 text-2xl">
//           &times;
//         </button>
//       </div>
//       <div className="p-4 ml-40">
//         <DetailMusic song={song} />
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default DetailMusicContainer;

import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { commentSchema } from './config';
import DetailMusic from './DetailMusic';
import CustomTextField from './../../../components/textField/CustomTextField';

const DetailMusicContainer = ({ song, onClose, currentUser }) => {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      comment: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    // Trong thực tế, bạn sẽ gọi API để lấy comments cho bài hát này
    // fetchComments(song.id).then(data => setComments(data));

    // Dữ liệu mẫu
    if (song) {
      setComments([
        {
          id: 1,
          user: { name: 'Người dùng 1', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
          text: 'Bài hát rất hay!',
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          user: { name: 'Người dùng 2', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
          text: 'Tôi nghe bài này mỗi ngày.',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 1,
          user: { name: 'Người dùng 1', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
          text: 'Bài hát rất hay!',
          createdAt: new Date().toISOString(),
        },
        {
          id: 2,
          user: { name: 'Người dùng 2', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
          text: 'Tôi nghe bài này mỗi ngày.',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 3,
          user: { name: 'Người dùng 3', avatar: 'https://mui.com/static/images/avatar/1.jpg' },
          text: 'Bài hát rất hay!',
          createdAt: new Date().toISOString(),
        },
        {
          id: 4,
          user: { name: 'Người dùng 4', avatar: 'https://mui.com/static/images/avatar/2.jpg' },
          text: 'Tôi nghe bài này mỗi ngày.',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ]);
    }
  }, [song]);

  const onSubmitComment = async (data) => {
    if (!currentUser) {
      alert('Vui lòng đăng nhập để bình luận');
      return;
    }

    setIsSubmitting(true);
    try {
      // Trong thực tế, bạn sẽ gọi API để lưu comment
      // await saveComment(song.id, data.comment);

      // Giả lập việc thêm comment mới
      const newComment = {
        id: comments.length + 1,
        user: {
          name: currentUser?.name || 'Người dùng hiện tại',
          avatar: currentUser?.avatar || 'https://mui.com/static/images/avatar/3.jpg',
        },
        text: data.comment,
        createdAt: new Date().toISOString(),
      };

      setComments([newComment, ...comments]);
      reset();
    } catch (error) {
      console.error('Lỗi khi gửi bình luận:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Định dạng ngày tháng để hiển thị
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl w-11/12 max-w-6xl max-h-[90vh] ">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white hover:text-yellow-400 text-2xl">
          &times;
        </button>
      </div>
      <div className="p-4 h-96">
        <DetailMusic song={song} />
      </div>
      <hr className="border-gray-700 my-4" />

      {/* Phần Bình Luận */}
      <div className="max-w-4xl mx-auto">
        {/* Form Bình Luận */}
        <div className="sticky h-20 top-0 bg-gray-800 pb-4">
          {/* <Typography variant="h5" className="text-white mb-4">
            Bình luận
          </Typography> */}
          <FormProvider {...methods}>
            <Box component="form" onSubmit={handleSubmit(onSubmitComment)} className="mb-6 flex">
              <CustomTextField
                fullWidth
                multiline
                name="comment"
                rows={1}
                placeholder="Viết bình luận của bạn..."
                variant="outlined"
                error={!!errors.comment}
                helperText={errors.comment?.message}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  marginBottom: 2,
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ height: '55px', ml: 1 }}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi bình luận'}
              </Button>
            </Box>
          </FormProvider>
        </div>

        {/* Danh sách Bình Luận */}
        <Box className="space-y-4 h-50 overflow-y-auto">
          {comments.length === 0 ? (
            <Typography className="text-gray-400 text-center">
              Chưa có bình luận nào. Hãy là người đầu tiên bình luận!
            </Typography>
          ) : (
            comments.map((comment) => (
              <Box key={comment.id} className="bg-gray-700 rounded-lg p-4">
                <Box className="flex items-start space-x-3">
                  <Avatar src={comment.user.avatar} alt={comment.user.name} />
                  <Box className="flex-1">
                    <Box className="flex justify-between items-center mb-1">
                      <Typography variant="subtitle1" className="text-white font-medium">
                        {comment.user.name}:
                      </Typography>
                      <Typography variant="caption" className="text-gray-400">
                        {formatDate(comment.createdAt)}
                      </Typography>
                    </Box>
                    <Typography className="text-gray-300 justify-self-start">
                      {comment.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </div>
    </div>
  );
};

export default DetailMusicContainer;
