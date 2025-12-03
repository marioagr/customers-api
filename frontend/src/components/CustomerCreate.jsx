import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  gender: z.string().min(1, 'Gender is required'),
  image: z.string().url('Invalid URL'),
});

const CustomerCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch('http://localhost:3000/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => navigate('/customers'));
  };

  return (
    <div>
      <h2>Create Customer</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input {...register('first_name')} />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input {...register('last_name')} />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Gender:</label>
          <input {...register('gender')} />
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>
        <div>
          <label>Image URL:</label>
          <input {...register('image')} />
          {errors.image && <p>{errors.image.message}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CustomerCreate;