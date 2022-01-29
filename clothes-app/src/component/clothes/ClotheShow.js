import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import { Card, ListGroup, ListGroupItem, Popover, Button, Overlay } from 'react-bootstrap';
// import useRef from 'react-bootstrap/useRef';

const ClotheShow = () => {
	const [dress, setDress] = useState([])
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	


	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`)
				setDress(data)
			} catch {
			}
		}
		getData()
	}, [])


	const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

	return (
		<Card style={{ width: '30rem' }}>
			<Card.Img variant="top" src="https://static.zara.net/photos///2021/V/0/1/p/3653/003/800/2/w/1140/3653003800_1_1_1.jpg?ts=1606920274038" />
			<Card.Body>
				<Card.Title>Clothe Title</Card.Title>
				<Card.Text>
					<div ref={ref}>
      <Button onClick={handleClick}>Desription</Button>

      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Hello!</Popover.Header>
          <Popover.Body>
            <strong>Description:</strong> This is a pretty nice collection for a young couple. 
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
				</Card.Text>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>Name:</ListGroupItem>
				<ListGroupItem>User Name:</ListGroupItem>
				<ListGroupItem>Price:</ListGroupItem>
				<ListGroupItem>Comment:</ListGroupItem>
			</ListGroup>
		</Card>
	)
}

export default ClotheShow;
