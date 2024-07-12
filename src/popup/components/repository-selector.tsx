type RepositorySelectorProps = {
  repoNames: string[];
  defaultRepo: string;
  onClickRepo: (name: string) => void;
};

export default function RepositorySelector({
  repoNames,
  defaultRepo,
  onClickRepo,
}: RepositorySelectorProps) {
  if (repoNames.length === 0) {
    return <div>First, make repository</div>;
  }
  console.log("defaultRepo", defaultRepo);
  return (
    <div className="select-wrapper">
      <label className="input-label" htmlFor="repo-select">
        Repository Name
      </label>

      <select
        id="repo-select"
        defaultValue={defaultRepo}
        onChange={(event) => onClickRepo(event.target.value)}
      >
        <option value="">Please choose an repository</option>
        {repoNames.map((v, i) => {
          return <option key={`${v}${i}`}>{v}</option>;
        })}
      </select>
    </div>
  );
}
