type DefaultRequestOption = {
  owner: string;
  repo: string;
  path: string;
  token: string;
  urlPath: string;
};

type GetContentInfoProps = {
  owner: string;
  repo: string;
  urlPath: string;
  token: string;
};

type CommitData = {
  message: string;
  content: string;
};

type UpdateFileProps = DefaultRequestOption &
  CommitData & {
    sha: string;
  };

type UploadFileProps = DefaultRequestOption & CommitData;

type GetContentInfoResponse = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};

async function getAccessToken(code: string): Promise<string | null> {
  try {
    const response = await fetch(
      "https://wmksdptj7y2ecwbzkhgywcueiu0oskbh.lambda-url.ap-northeast-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          code,
        }),
      },
    );

    const result = await response.json();

    if (result?.access_token) {
      return result.access_token;
    }

    return null;
  } catch (error) {
    console.log(error);

    return null;
  }
}

async function getUserName(token: string): Promise<string | null> {
  try {
    const response = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await response.json();

    if (userInfo?.login) {
      return userInfo.login;
    }

    return null;
  } catch (error) {
    console.log(error);

    return null;
  }
}

async function getContentInfo({
  owner,
  repo,
  urlPath,
  token,
}: GetContentInfoProps): Promise<GetContentInfoResponse | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${urlPath}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}

async function updateFile({
  owner,
  repo,
  path,
  token,
  message,
  content,
  sha,
  urlPath,
}: UpdateFileProps) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${urlPath}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        owner,
        repo,
        path,
        message,
        content,
        sha,
      }),
    },
  );

  console.log("File is Updated", response);

  return response.json();
}

async function uploadNewFile({
  owner,
  repo,
  path,
  token,
  message,
  content,
  urlPath,
}: UploadFileProps) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${urlPath}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        owner,
        repo,
        path,
        message,
        content,
      }),
    },
  );

  console.log("File is Uploaded", response);

  return response.json();
}
