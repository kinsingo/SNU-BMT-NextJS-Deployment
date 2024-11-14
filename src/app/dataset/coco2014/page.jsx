import { Box, Typography, List, ListItem } from '@mui/material';

export const metadata = {
  title: "AI BMT - Coco2014",
  description: "Coco2014 is a large-scale visual database designed for use in visual object recognition software research.",
}

export default function Dataset() {
  return (
    <>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h2" sx={{ color: '#333', mt: 0, fontSize: '1.75rem' }}>
          Dataset Name: Coco2014
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', lineHeight: '1.6em', color: '#555' }}>
          <strong>Version:</strong> 2021
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', lineHeight: '1.6em', color: '#555' }}>
          <strong>Description:</strong> ImageNet is a large-scale visual database designed for use in visual object recognition software research. It contains millions of images that have been annotated with labels for object classes.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', lineHeight: '1.6em', color: '#555' }}>
          <strong>Size:</strong> 14 million images
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', lineHeight: '1.6em', color: '#555' }}>
          <strong>File Format:</strong> JPEG
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1em', lineHeight: '1.6em', color: '#555' }}>
          <strong>License:</strong> Non-commercial research and educational use
        </Typography>

        <Typography variant="h3" sx={{ color: '#007BFF', mt: 3 }}>Key Features:</Typography>
        <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Over 14 million images
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            1000 object categories
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            High-quality annotations
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Widely used benchmark for computer vision
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ color: '#007BFF', mt: 3 }}>Use Cases:</Typography>
        <List sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Image classification
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Object detection
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Image segmentation
          </ListItem>
          <ListItem sx={{ display: 'list-item', fontSize: '1.1em', marginBottom: '10px' }}>
            Transfer learning for various AI models
          </ListItem>
        </List>
      </Box>
    </>
  );
}
