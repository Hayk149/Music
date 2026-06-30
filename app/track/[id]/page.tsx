interface TrackPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TrackPage({params}: TrackPageProps) {
    const {id} = await params
    return <h1>Страница трека c id {id}</h1>;
}