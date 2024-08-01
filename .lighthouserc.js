module.exports = {
    ci: {
      collect: {
        staticDistDir: "./build",
        //startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능
        url: ["https://www.amoremall.com:443/kr/ko/display/main"],
        numberOfRuns: 5,
      },
      upload: {
        target: "temporary-public-storage",
      },
    },
  };

//url수정