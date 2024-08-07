import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DogInterface } from '../../../interfaces/dog.interface';
import { getDogReqById } from '../../../api/dogs';

export default function EditPannel() {
	const { id } = useParams();
	const [dog, setDog] = useState<DogInterface>();
	useEffect(() => {
		if (id) {
			getDogReqById(id).then((data) => setDog(data));
		}
	}, [id]);
	return <div>EditPannel</div>;
}
