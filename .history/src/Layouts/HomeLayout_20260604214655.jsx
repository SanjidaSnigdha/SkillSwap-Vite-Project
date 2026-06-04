import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <aside>
                </aside>
                <section className='main'>
                    <Outlet>

                    </Outlet>
                    </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;