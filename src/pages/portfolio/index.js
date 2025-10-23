import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Carousel, Spinner } from "react-bootstrap";
import "./style.css";

const CONTENTFUL_ENDPOINT = "https://graphql.contentful.com/content/v1/spaces/m3eo7rpvd70v/";
const ACCESS_TOKEN = "EFuiK-tmQKdMOxfQlc8f4xmHCXE8BZ0kenm10W9j17E";

const query = `
  query AlbumCollection {
    albumCollection {
      items {
        name
        slug
        photosCollection {
          items {
            url
          }
        }
      }
    }
  }
`;

export function Portfolio() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(CONTENTFUL_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const { data } = await res.json();
        setGalleries(data.albumCollection.items);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleOpen = (album) => setSelectedAlbum(album);
  const handleClose = () => setSelectedAlbum(null);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio</title>
          <meta name="description" content="Gallery of albums from Contentful" />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Album Collection</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          <div className="mb-5 po_items_ho">
            {galleries.map((album, i) => (
              <div key={i} className="po_item" onClick={() => handleOpen(album)}>
                <img src={album.photosCollection.items[0]?.url} alt={album.name} />
                <div className="content">
                  <p>{album.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <Modal show={!!selectedAlbum} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedAlbum?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedAlbum?.photosCollection?.items?.length > 0 ? (
              <Carousel>
                {selectedAlbum.photosCollection.items.map((photo, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      src={photo.url}
                      alt={`Slide ${idx}`}
                      className="d-block w-100"
                      style={{ maxHeight: "600px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <p>No photos available.</p>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
}
