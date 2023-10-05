import Link from "next/link";
import Repo from "@/app/components/Repo";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href="/code/repos">
        Back to repositories
      </Link>
      <Repo name={name} />
    </div>
  );
};

export default RepoPage;
