
import {IGenreModel} from "@/Models/IGenreModel";
import Link from "next/link";
import './MenuHeader.css';

type IProps = {
    genres: IGenreModel[];
}
export default function  MenuHeader({genres}:IProps){

    return (
            <nav>
                <ul>
                    <li>
                        <Link href="/public">
                            Home
                        </Link>
                    </li>
                    <li className="dropdown">
                        <span>Genres</span>
                        <div className="dropdown-content">
                            {genres.map((genre) =>
                                <Link key={genre.id} href={`/public?genre=${genre.id}&name=${genre.name}`}>
                                    {genre.name}
                                </Link>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
    );
};
