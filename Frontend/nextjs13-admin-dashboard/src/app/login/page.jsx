"use client"
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from "next/image";
import React, { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";

export default function Login() {
    const [error, setError] = useState();
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Geçersiz e-mail adresi.').required('Bu alan zorunludur.'),
            password: Yup.string().required('Bu alan zorunludur.'),
        }),
        onSubmit: values => {
            handlePostLogin(values)
        },
    });

    // ** Handler Functions 
    const handlePostLogin = useCallback(async (data) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            const json = await response.json()
            console.log('first', json)
            if (json?.status === 200) {
                router.push(json.path);
                router.refresh();
            }
            if (!json?.success) {
                console.log(json)
                setError(json.message)
            }

        } catch (error) {
            console.log('error', error)
        }
    }, [])

    return (
        <section className=" min-h-screen flex flex-row flex-wrap">
            <div className="lg:basis-4/6   relative">
                <Image
                    priority
                    alt="Login-image"
                    src={'/login_image.jpg'}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
                />

            </div>
            <div className=" md:basis-2/6 w-full p-5 block m-auto ">
                <form className=" mx-5 ">
                    <h2 className=" font-extrabold text-xl">Hoş Geldin</h2>
                    <div className=" my-7">
                        <label className="">E mail</label>
                        <Input
                            type="email"
                            placeholder="E mail"
                            size="large"
                            id="email"
                            name="email"
                            className="mt-2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (<span className=" text-red-600 text-xs">{formik.errors.email}</span>) : null}
                    </div>
                    <div className="mt-1 mb-4">
                        <label className="">Şifre</label>
                        <Input.Password
                            size="large"
                            id="password"
                            name="password"
                            className="mt-2"
                            placeholder="Şifre"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (<span className="text-red-600 text-xs">{formik.errors.password}</span>) : null}
                    </div>
                    <Button onClick={formik.handleSubmit} size="large" block className=" bg-blue-500 w-100 text-white mt-4 "  > Giriş Yap</Button>
                </form>
            </div>
        </section>
    )
}
