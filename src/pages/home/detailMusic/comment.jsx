import React from 'react';
import Box from '@mui/material/Box';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';

const comment = () => {
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitComment)} className="mb-6">
      <TextField
        {...register('comment')}
        fullWidth
        multiline
        rows={3}
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
        sx={{ mt: 1 }}
      >
        {isSubmitting ? 'Đang gửi...' : 'Gửi bình luận'}
      </Button>
    </Box>
  );
};

export default comment;
