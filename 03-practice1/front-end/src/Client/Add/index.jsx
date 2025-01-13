import { Formik, Form, Field } from 'formik';
import { ProductSchema } from '../../validations/product.scheme';
import axios from 'axios';
const BASE_URL = "http://localhost:8080/practice1";


const Add = ({products, setProducts}) => (
    <div>
        <div className="container">
        <h1>Add Product</h1>
        <Formik
            initialValues={{
                imageUrl: '',
                country: '',
                title: '',
                description: '',
            }}
            validationSchema={ProductSchema}
            onSubmit={async (values, { resetForm }) => {
                try {
                    const response = await axios.post(`${BASE_URL}`, values)
                    resetForm()
                    setProducts((prevUsers)=>[...prevUsers, {...values}])
                } catch (error) {
                    console.log(error.message);
                }
            }}
        >

            {({ errors, touched }) => (
                <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                    <Field name="imageUrl" placeholder={"imgeUrl"} />
                    {errors.imageUrl && touched.imageUrl ? (
                        <div style={{ color: "red" }}>{errors.imageUrl}</div>
                    ) : null}
                    <Field name="country" placeholder={"country"} />
                    {errors.country && touched.country ? (
                        <div style={{ color: "red" }}>{errors.country}</div>
                    ) : null}
                    <Field name="title" type="string" placeholder={"title"} />
                    {errors.title && touched.title ? <div style={{ color: "red" }}>{errors.title}</div> : null}
                   
                    <Field name="description" type="string" placeholder={"description"} />
                    {errors.description && touched.description ? <div style={{ color: "red" }}>{errors.description}</div> : null}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
        </div>
    </div>
);

export default Add