import {getGenres} from "@/Services/services.api";
import Link from "next/link";
import MovieSearch from "@/Components/MovieSearch/MovieSearch";
import Image from "next/image";
import MenuHeader from "@/Components/MenuHeader/MenuHeader";
import './HeaderComponent.css';
import {Suspense} from "react";


export default async function HeaderComponent() {
 const genres = await getGenres();

    return (
        <header>
            <div className='header'>
                <div className='header-logo'>
                    <Link href="/">
                        <h3>&#9818; MovieQueen</h3>
                    </Link>
                </div>
                    <MenuHeader genres={genres}/>
                <Suspense fallback={<input placeholder="Пошук..." disabled />}>
                    <MovieSearch/>
                </Suspense>
                <div className='userIconDiv'>
                    <p>Queen</p>
                    <Image
                        className='userIcon'
                        src="/UserIcon.jpg"
                        alt="User Icon"
                        width={35}
                        height={35}
                    />
                </div>
            </div>
        </header>
    );
};