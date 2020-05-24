## Markdown 流程图

#### 1.使用mermaid制作关系图

- **1.声明图形方向** 

  使用 `graph` 参数确定方向

  - Code

    ```
    graph TB 					#可选参数 TB  BT  LR  RL
    
    start --> Stop
    ```

  - Result

    ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADeAwoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1YPdzXE6xzpGsb7QDHnsD6+9P8q//AOfyP/vz/wDXotf+Pm8/66j/ANBFWa4btt6v7yit5V//AM/kf/fn/wCvR5V//wA/kf8A35/+vVmijXu/vYFbyr//AJ/I/wDvz/8AXo8q/wD+fyP/AL8//XqzRRr3f3sCt5V//wA/kf8A35/+vR5V/wD8/kf/AH5/+vVmoLxrtYQbKOF5M8iZ2UY+oBp69397Ab5V/wD8/kf/AH5/+vR5V/8A8/kf/fn/AOvWLD4h1E+HrnWprK1EMUMjrGk7FmZCRg5QYBweauWmrXn9pQWN/bQxtdQtNC8ErOPlxkMCoI+8MH60+WXf8QuXvKv/APn8j/78/wD16PKv/wDn8j/78/8A16s0VOvd/ewK3lX/APz+R/8Afn/69HlX/wDz+R/9+f8A69WaKNe7+9gVvKv/APn8j/78/wD16PKv/wDn8j/78/8A16s0Ua9397AreVff8/kf/fn/AOvUtjM89lHLIQWYc4GO9SVBpf8AyDYfof5mtKTfPa/T/IGLeTywtCkKoWlfb8+cDgnt9KZu1H+7bfm1Le/8fNn/ANdT/wCgmrFKcpc71BFbdqP922/NqN2o/wB22/Nqs0VN5dwK27Uf7tt+bUbtR/u235tVmii8u4FbdqP922/NqN2o/wB22/Nqs0UXl3ArbtR/u235tRu1H+7bfm1ZTeKQguZ306cWdrcGCW4EiHaQQC23OcZIqa/1u6sb2G3/ALKklFxKYoXWeMBjtLdCcjgGq9/uGhf3aj/dtvzajdqP922/Nqlt5JJYEeaEwyMMtGWDbfxHBqSpvLuBW3aj/dtvzajdqP8AdtvzarNFF5dwK27Uf7tt+bUbtR/u235tVmii8u4FbdqP922/NqW3uLg3bQTrEP3e8FCfXHerFVl/5C5/69x/6FTjKXMtQLtFFFdhIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBStf+Pm8/wCuo/8AQRVmq1r/AMfN5/11H/oIqzXCuvz/ADKCiiigAoqK7uVtLWS4ZSwjXJC9TVX+0bgHH9mz/wDfaf41pGlOaukBfoqh/aNx/wBA2f8A77T/ABo/tG4/6Bs//faf41fsKnb8gOfEb/8ACr7xNjbjb3Hy7Tn77dqdpYtP7dsZNFlknBgZb5t7SKqYyg3OSQd3QA+uRxW9/aNx/wBA2f8A77T/ABo/tG4/6Bs//faf41apVNdPxQi/RVD+0bj/AKBs/wD32n+NH9o3H/QNn/77T/Go9hU7fkMv0VTtr9p7r7PJayQtsLjcVIIzjsferlZyg4OzAKKKKgAqDS/+QbD9D/M1PUGl/wDINh+h/ma0pfH8n+gPYS9/4+bP/rqf/QTViq97/wAfNn/11P8A6CasVM/jf9dAQUUUVIBRRVKTVIY55IhFO7RnDFIiwBwD1/GrjCUnaKAu0VR/taL/AJ9rr/vwaP7Wi/59rr/vwav2FT+UDjZViGma1cf2i3nQ6lK8VmXDRyuGBVTH1OTjjNdHrLFtR8Ps42sb0krnofJfirAudPFx9oGmyCbOfMFp82frjNStqcDFS1pckqcqTbng+1X7KpZe6w7/AD/E0KKo/wBrRf8APtdf9+DR/a0X/Ptdf9+DUewqfygXqKoHWIFGXhuVXIGWhIAzxV+olCUPiQBRRRUAFVl/5C5/69x/6FVmqy/8hc/9e4/9Cpr4kBdooortJCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAKVr/wAfN5/11H/oIqzVa1/4+bz/AK6j/wBBFWa4V1+f5lBRRRQBS1r/AJA9z/uVI33j9aj1r/kD3P8AuVI33j9a78P/AA/n/kKQlFFR3NxDZwNPcSLFEmNzt0GTgfqa2IJKKMUUAFFRx3EMs00McitJAQJVHVCRkZ/CpKAII/8AkNJ/16t/6GK0az4/+Q0n/Xq3/oYrQrjxHxmi2CiiiuYAqDS/+QbD9D/M1PUGl/8AINh+h/ma0pfH8n+gPYS9/wCPmz/66n/0E1Yqve/8fNn/ANdT/wCgmrFTP43/AF0BBRRRUgFZlv8A8fl9/wBdx/6AtadZlv8A8fl9/wBdx/6AtdeG3l6fqgexZooorqMwopqyI5YK6sUOGAOdp9D6U6gAooooAqap/wAg+T6r/wChCtWsrVP+QfJ9V/8AQhWrXPifhj8/0LWwUUUVxDCqy/8AIXP/AF7j/wBCqzVZf+Quf+vcf+hU18SAu1S+2zvJIsVoXWNyhbzAMkVcqnZffuv+vhv5Ct60mrWYkH2q8/58f/Iy0farz/nx/wDIy1ZorHmn/N+X+Q9Ct9qvP+fH/wAjLR9qvP8Anx/8jLVmijmn/N+X+QaFb7Vef8+P/kZaPtV5/wA+P/kZas0Uc0/5vy/yDQrfarz/AJ8f/Iy0farz/nx/8jLVmijmn/N+X+QaFb7Vef8APj/5GWj7Vef8+P8A5GWrNFHNP+b8v8g0K32q8/58f/Iy0farz/nx/wDIy1Zoo5p/zfl/kGhW+1Xn/Pj/AORlo+1Xn/Pj/wCRlom1C3g1C3sXLedcq7RgKSCFxnJ7dRUN/rEGn3UFq0NxNNOrMiQRFzhcZJ9Oop3qd/y/yCxN9qvP+fH/AMjLR9qvP+fH/wAjLRYahb6lbefbs2AxR1dSrIw6qwPQirNLmmuv5f5BoVvtV5/z4/8AkZaPtV5/z4/+RlqzRRzT/m/L/INCt9qvP+fH/wAjLR9qvP8Anx/8jLVmijmn/N+X+QaFb7Vef8+P/kZaPtV5/wA+P/kZas0Uc0/5vy/yDQrfarz/AJ8f/Iy0farz/nx/8jLVmijmn/N+X+QaFb7Vef8APj/5GWj7Vef8+P8A5GWrNFHNP+b8v8g0K32q8/58f/Iy0sV5K1ysM1sYi6kg7w3T/wDXViq0n/IUt/8Arm/9KFOd1r+QWLtV7q5a3MapF5jSNtA3Y7ZqxVO9/wCPqz/66n/0E10VW1G6EhPtV5/z4/8AkZaPtV5/z4/+RlqzRXPzT/m/L/IehW+1Xn/Pj/5GWj7Vef8APj/5GWrNFHNP+b8v8g0K32q8/wCfH/yMtH2q8/58f/Iy1Zoo5p/zfl/kGhW+1Xn/AD4/+Rlo+1Xn/Pj/AORlqzRRzT/m/L/INCt9qvP+fH/yMtH2q8/58f8AyMtWaKOaf835f5BoVvtV5/z4/wDkZaPtV5/z4/8AkZas0Uc0/wCb8v8AINCt9qvP+fH/AMjLR9qvP+fH/wAjLUtxPHa20txKSI4kLsQM8AZNZ9l4htL2W3jEVzB9qXdA08JQSjGeD645xTTqPZ/l/kGhb+1Xn/Pj/wCRlo+1Xn/Pj/5GWiy1C3v/ALR5BY/Z5mgk3KRhl6/Xr1qzS5p9/wAv8gsVvtV5/wA+P/kZaPtV5/z4/wDkZas0Uc0/5vy/yDQrfarz/nx/8jLR9qvP+fH/AMjLVmijmn/N+X+QaFb7Vef8+P8A5GWj7Vef8+P/AJGWrNFHNP8Am/L/ACDQrfarz/nx/wDIy0farz/nx/8AIy1Zoo5p/wA35f5BoVvtV5/z4/8AkZaPtV5/z4/+RlqzRRzT/m/L/INCt9qvP+fH/wAjLSPeXcaM7WOFUEn96OlWqiu/+POf/rm38qTnNL4vy/yCyJon8yJJMY3KDj60+orX/j0h/wCua/yqWuxaokpWv/Hzef8AXUf+girNVrX/AI+bz/rqP/QRVmuJdfn+ZQUUUUAUta/5A9z/ALlSN94/Wo9a/wCQPc/7lSN94/Wu/D/w/n/kKRT1Zb19KuU051S7aMiFmOPmrk9Rmt77wvf2z2uoWd1ZyQ+fb3Nw7FGLDkNuO5SM98cZwOtdpNDHcQvDMgeNxhlPQiq8el2EVpJaJaRCCbPmRkZD59c8mtGiTJ1UsbtdIs7S5neG2MrO2oPAkIJIDM2SzHIPrjFZ+n3F1qx8NC5vJ9txZztOIZWUTFcAZIwffIwa6N9F0yQQh7KJhAu2POTtHXHXkexzUsOm2NuYDDaRR/ZlZIdq48tW6gegNCT6/wBbgY2hWMUPiTXZF87KTRBd0zsMGIZyCcH6np2roqg+w2ovjfCBBclNhlHBK+h9anqlsBDH/wAhpP8Ar1b/ANDFaFZ8f/IaT/r1b/0MVoVx4j4y1sFFFFcwBUGl/wDINh+h/manqDS/+QbD9D/M1pS+P5P9Aewl7/x82f8A11P/AKCasVXvf+Pmz/66n/0E1YqZ/G/66AgoooqQCsy3/wCPy+/67j/0Ba06zLf/AI/L7/ruP/QFrrw28vT9UD2LNc5catJa+JWttSuLqzgd0WyZIx5E2RyrNg/NnPGR2ro6pTaVa3FyJ5jM+HD+UZm8rcOh2dMggH8K6XuQc3bzz6ND4kvoriaaSO/KKsxBTcwQB2AAPGfXoK13a90zVdOiN/NeRXkjQyrOF+UhCwZdoGOmCOeoq6dIsmnupWjZheDE8TOTHJwBkp0zgDmi10i0tJ0mUzyyRqUjaeZpPLU9QuenQflSSasBzsN9qq+FG12XVJXmhd2EOxBG6CQrtYYyTjjII7V1wOQDjGRnFc/onhmK302GO/RzIkrStCJy0RbeSGK9Ceh+tdDTjsIqap/yD5Pqv/oQrVrK1T/kHyfVf/QhWrWGJ+GPz/QtbBRRRXEMKrL/AMhc/wDXuP8A0KrNVl/5C5/69x/6FTXxIC5VOy+/df8AXw38hVyqdl9+6/6+G/kK1rdBIs0UUViMKKKKACiiigAooooAKKKKACiiigDC1L/kc9F4/wCWFz/JKg1sXZ8WaV9i8jzvs1xjzw23GU9Oa2b7SbDUnje8tkmaLOxjkFc9cEeuKWDS7G2aF4rZFaBWWNuSVDYyAT64FWmtPL/ggzO8KuslhcyOW+2PdSG8Rsfu5eMqMdgNuD3GD3rbqGOzt4bma5jhRJp8eY4HL44GampN3AKKKKkAooooAKKKKACiiigAooooAKrSf8hS3/65v/SrNVpP+Qpb/wDXN/6UdV6oC7VO9/4+rP8A66n/ANBNXKp3v/H1Z/8AXU/+gmumt8H3fmJFiiiiuYYUUUUAFFFFABRRRQAUUUUAFFFFAFLW/wDkBah/17Sf+gmua0trnd4cj1QxJbeQr2jQg4eXysBXz0O0kjHBOfauwliSeJ4pUDxyKVZT0IPUVBLptlNZxWkltG0EJUxxkcJt+7j0xirjKwPVWMvwt/zGOD/yFZ//AGWt2s4+H9K+1NciyQSvJ5jMpI3N6nB61o0m0w6sKKKKkAooooAKKKKACiiigAooooAKiu/+POf/AK5t/Kpaiu/+POf/AK5t/KlLZjJLX/j0h/65r/Kpaitf+PSH/rmv8qlrtj8KIKVr/wAfN5/11H/oIqzVa1/4+bz/AK6j/wBBFWa411+f5lBRRRQBS1r/AJA9z/uVI33j9afeWwvLSS3ZiokXG4dRVb7Bd/8AQSk/78x/4V2UakIws2DVyWiov7Puv+glJ/35j/wo/s+6/wCglJ/35j/wrX2tPv8An/kTyktFY+rSX+nXWmxR3xcXl0IHLQp8oKk5HHXitP8As+6/6CUn/fmP/Cn7Wn3/AD/yDlJaKi/s+6/6CUn/AH5j/wAKP7Puv+glJ/35j/wpe1p9/wA/8g5RI/8AkNJ/16t/6GK0Kp21g8N19olunmbYUAKKoAznsParlcteSlK6KCiiisACoNL/AOQbD9D/ADNT1Bpf/INh+h/ma0pfH8n+gPYS9/4+bP8A66n/ANBNWKr3v/HzZ/8AXU/+gmrFTP43/XQEFFFFSAVmW/8Ax+X3/Xcf+gLWnWe1jeJczyQTwBJnD4kjJI4A6hh6V04eUYt8ztoDJqKh+zal/wA/Fp/35b/4qj7NqX/Pxaf9+W/+Krp9pT/m/MnlZNRWfqlxd6Tplxf3N1aCK3jLt+5bnHb73fpVLwxrN34n0ZNQhktYmLFJIjGxMbDtnd6YP40+eFr835hY3aKh+zal/wA/Fp/35b/4qj7NqX/Pxaf9+W/+Kpe0p/zfmHKyLVP+QfJ9V/8AQhWrWXNp9/cReVJc2wQkE7YWzwQf73tWpWGInGSSi77/AKFLRBRRRXIAVWX/AJC5/wCvcf8AoVWarL/yFz/17j/0KmviQFyqdl9+6/6+G/kKuVTsvv3X/Xw38hWtboJFmiiisRhRWZfJ52pwxNJIqeSzYRyvOR6Un9nxf89bn/v+3+NdUcPzRTvuF7GpRWX/AGfF/wA9bn/v+3+NH9nxf89bn/v+3+NV9WXcV0alFZf9nxf89bn/AL/t/jR/Z8X/AD1uf+/7f40fVl3C6NSisv8As+L/AJ63P/f9v8aX+z4v+etz/wB/2/xo+rLuF0adFUtILGwG5mbEkigscnAcgc1drmnHlk49hhRRRUAFFFFABRVHVsmO2QO6h7hVbYxUkc9xUP8AZ8X/AD1uf+/7f41006HPHmuDdjUorL/s+L/nrc/9/wBv8aP7Pi/563P/AH/b/Gr+rLuK6NSisv8As+L/AJ63P/f9v8aP7Pi/563P/f8Ab/Gj6su4XRqUVl/2fF/z1uf+/wC3+NH9nxf89bn/AL/t/jR9WXcLo1KKoaUCjXce92VJsLvYsQNo7mr9c048knEYVWk/5Clv/wBc3/pVmq0n/IUt/wDrm/8ASo6r1QF2qd7/AMfVn/11P/oJq5VO9/4+rP8A66n/ANBNdNb4Pu/MSLFFFFcwwoqvqLFdNuWUkERMQR24qlHYxNGjGW5yVBP79vT61vTo86vcL2NWisv+z4v+etz/AN/2/wAaP7Pi/wCetz/3/b/Gtfqy7iujUorL/s+L/nrc/wDf9v8AGj+z4v8Anrc/9/2/xo+rLuF0alFZf9nxf89bn/v+3+NH9nxf89bn/v8At/jR9WXcLo1KKy7SPyNWEaSSsjW5Yh5C3O4DvWpXPUhySsMKKKKzAKKKKACig9KxLC0WewglkmuC7xgsfPYZP51vSpe0Td9gubdFZf8AZ8X/AD1uf+/7f40f2fF/z1uf+/7f41r9WXcV0alFZf8AZ8X/AD1uf+/7f40f2fF/z1uf+/7f40fVl3C6NSisv+z4v+etz/3/AG/xo/s+L/nrc/8Af9v8aPqy7hdGpRWO8Atrq0aOWb5ptpDSswIwexrYrGrT9m1qMKiu/wDjzn/65t/Kpaiu/wDjzn/65t/KsJbMZJa/8ekP/XNf5VLUVr/x6Q/9c1/lUtdsfhRBStf+Pm8/66j/ANBFWarWv/Hzef8AXUf+girNca6/P8ygooooAKKKKACiiigDn/E//IQ0D/sJL/6A1dBXP+J/+QhoH/YSX/0Bq6CqeyAKKKKkAooooAKKKKACoNL/AOQbD9D/ADNT1Bpf/INh+h/ma0pfH8n+gPYS9/4+bP8A66n/ANBNWKr3v/HzZ/8AXU/+gmrFTP43/XQEFFFFSAUUUUAFFFFAHPeM/D9z4k0lbOK+FrCreZL8m4yYHA69M8/lWL8M/DtzpVguoi/ElvqEQZrfZjawPBBz9RXb3H/HtL/uH+VY/gr/AJE7TP8ArgP5mtE3y2A3KKKKzAKKKKACiiigAqsv/IXP/XuP/Qqs1WX/AJC5/wCvcf8AoVNfEgLlU7L791/18N/IVcqnZffuv+vhv5Cta3QSLNFFFYjM65/5DMP/AFwf+YqeoLn/AJDMP/XB/wCYqevTp/w4kyCiqV5qa2t3DZx28lzdTI0ixRlVOxcAsSxAxkiqUurXq+KLfT0s3NvJatIxLIDncozyc4GSMd896d9bCNqis6bWBbX0Fvc2c8MdzL5MM7sm12xnG3O4Zwecfzqq3iB57TUJLLTrh/sZljMjMirvQdstyO/6daOZWCxt0d6oaHeXGoaNa3V1CYpZIlY5KnfkA7htJwD6dav96p6CTuM0f/jw/wC20v8A6G1XayNN1Owt7Vop723ikWaTKPMqkfO3Ymrf9s6Wemo2n/f9P8a8+sn7SXqzQuUVU/tfTf8AoIWv/f8AX/Gj+19N/wCgha/9/wBf8ayswLdFVP7X03/oIWv/AH/X/GsnxH4xsdC05byKSC8xKqPFFOu7ac5I+lNRbA09U/5c/wDr6T+RqSsK08WaP4kSzOn3QMouULQSfLIvB7d/qK3a76KtTVyZBRVXUNQj0+KNnR5HmkEUUSY3SOegGeB9TWbqusX9pNpaw6fKPtNz5cqM8ecbWO0HdjPAOenGKu6EblFZ0ur4uJbe2sZ7uSAAziIoPLJGQuWI3NjsM/rULeJLRnsFtYJ7s6hG7weUoH3eobJG38emKLoDXoqpp+opfiZfKkgmt38uaGTG5DjI5BIIIOQQat0xEem/669/6+P/AGUVeqjpv+uvf+vj/wBlFXq4K/8AEZoFVpP+Qpb/APXN/wClWarSf8hS3/65v/Sseq9UBdqne/8AH1Z/9dT/AOgmrlU73/j6s/8Arqf/AEE101vg+78xIsUUUVzDK2p/8gy6/wCuTfyqOL/Ux/7g/lUmp/8AIMuv+uTfyqOL/Ux/7g/lXdh/gfqKQ+iorq5hs7WW6uH2QwoXdvRQMk1k6lrV5D4dvNQg0+aKSOEyRea0ZBBGQ2N3brg8+1bNpK5KVzborLXWWWK1iezme9uIy4tlZM7RjLls7QOfXvio5/EtpbWEl1Lb3IeG4S2mt1UNJG7EAcA4I5ByM5zxT62EbFFULXVRNftYz2k1pP5fmospUiRc4JBUkcHGQeeRV+gCCP8A5Daf9ep/9DFaNYd9qtjo+oC61C6jt4RbEbnPU7xwB3NZ+ifELTNd1e4tYQLe2hi3Ce4cIZDkDAB6D9a5MRFuV/I0Wx1lFU/7X0z/AKCFr/3/AF/xpf7X03/oIWv/AH/X/GuazAt0VU/tfTf+gha/9/1/xpDrGmDrqNp/3/T/ABoswLh6VlaX/wAgq1/65LVg6zpeP+Qlaf8Af9P8ar6V/wAgq1/65L/KuzDL3ZfL9RMt0UdKy4daa8sZLy0sJ5IfLZ4JSyATYyOATkdO+M1u3YlK5qUVjaJqt9feHrS9l0+WW4mjU7Y2QB8jO4c4UexwaG8T2i2Md19nuGL3n2MwoFZklyRjg4I46g96fWwjZorCGsagfEtvYHTpI4XtTKymSIkHcBuyG6Dpgdc1u0J3Vxla6/4+LL/r4/8AZTWnWZdf8fFl/wBfH/sprTrlxO8fQpbBUV3/AMec/wD1zb+VS1Fd/wDHnP8A9c2/lXHLZlElr/x6Q/8AXNf5VLUVr/x6Q/8AXNf5VLXbH4UQUrX/AI+bz/rqP/QRVmq1r/x83n/XUf8AoIqzXGuvz/MoKKKKACiiigAooooA5/xP/wAhDQP+wkv/AKA1dBXP+J/+QhoH/YSX/wBAaugqnsgCiiipAKKKKACiiigAqDS/+QbD9D/M1PUGl/8AINh+h/ma0pfH8n+gPYS9/wCPmz/66n/0E1Yqve/8fNn/ANdT/wCgmrFTP43/AF0BBRRRUgFFFFABRRRQBHcf8e0v+4f5Vj+Cv+RO0z/rgP5mti4/49pf9w/yrH8Ff8idpn/XAfzNV9kDcoooqQCiiigAooooAKrL/wAhc/8AXuP/AEKrNVl/5C5/69x/6FTXxIC5VOy+/df9fDfyFXKp2X37r/r4b+QrWt0EizRRRWIzOuf+QzD/ANcH/mKnqC5/5DMP/XB/5ip69On/AA4kyMXxHpDaqkXlWgkmiyYrhLowSQN6ggHI9qVNNv4NT028LpePDam2uXZ9hJJU7wMHPIPFbNFOwjj4PC13HNaO1naNPBfi4mvnmLyzLuOcAjK8YyM4ra0/SpoNO1G1nZFN3cTupU5wr9M+/tWtRRyq1v66f5BfW/8AXX/MoaJBdWuj21rdxJHLbxrF8km8MFAG7oMZ9Kv96KO9VuLYyrLw7od/C9zeaPY3E7zSbpZbdGZsOQMkj0FWR4S8Ng5Hh/TAf+vSP/CrOj/8eH/baX/0Nqu159Zv2kvVmhlf8Ir4d/6AOm/+Aqf4Uf8ACK+Hf+gDpv8A4Cp/hWrRWV2Blf8ACK+Hf+gDpv8A4Cp/hWT4j8A6Vq2nLbadY2OnymVWe4itlDBRnIGAPauropqTQHJaf4L0fwz9jktITJdG4VWuZTlyCDkDsB9K6Oo9U/5c/wDr6T+RqSu+k26auTIz9bsE1PTmtZbKO8RmBMTymL8Qw6EVlpouqRabp4ac3dzZXhnVJ58nyyGAQyY5IDdcc4rpKKuwjGjtNR06/vZ7O3huEvnWYrJNsMUm0Kc8HcvAPGD1rLNlc6Rq+g2lt5dzNFbXG8O3liTJUtg845PGa62mmNDIshRS6ghWKjIB64NLlAz9JsbiCe9vbvYs97IrGONtyxqq7VGe54yT71pUUVSAj03/AF17/wBfH/soq9VHTf8AXXv/AF8f+yir1cFf+IywqtJ/yFLf/rm/9Ks1Wk/5Clv/ANc3/pWPVeqAu1Tvf+Pqz/66n/0E1cqne/8AH1Z/9dT/AOgmumt8H3fmJFiiiiuYZW1P/kGXX/XJv5VHF/qY/wDcH8qk1P8A5Bl1/wBcm/lUcX+pj/3B/Ku7D/A/UUhLiPzbaWPy0k3oRsk+62R0PtXN2nhq5j03VLJWa0tLuAxwWjXJnWFiDkhscA5HHsTXUUVs0mTcwxY6kl1Z6kltCbiK2NtNbGfhlyCGV8dcjoR0NZ2uWV1b6ZJdyGJbu81O2fZklI8Mqque/A5PvXW0140lAEiK4BBAZQcEdDz3otrf+t7i6W/rsZkFne3OuLqd7FHbiCBoYokl8wsWILMTgegAFatFFNbDMnVNE07Xr9bTUrZZ4xbMVzwUO4cgjoaydF+GemaTq9xNMkOo2UsWI4ruFXaJs+4weO/FdLH/AMhtP+vU/wDoYrRrkxEmpW8i1sZX/CK+Hf8AoA6b/wCAif4Uf8Ir4d/6AOm/+Aqf4Vq0VzXYGV/wivh3/oA6b/4Cp/hSHwn4cbroGmn62if4VrUUXYGR/wAIl4ax/wAi/pn/AICR/wCFO0r/AJBVr/1yX+Vap6VlaX/yCrX/AK5LXZhn7svl+omW653TNAns9UnmiT7BZzRustslyZY5Hb+NVI+Tv+YHauiordq5Nzlf7Av30nSrO5tYZ49Oba9t9qKpcALhXzjsedpyKdbeHLyC3ijWG0gCawLzy4WwiRY6Djr7V1FFFtb/ANf1oBmXNlcjxDbajAiSRi3a3lVpNpUFgwYcc9DxWnRRTWgFa6/4+LL/AK+P/ZTWnWZdf8fFl/18f+ymtOuXE7x9ClsFRXf/AB5z/wDXNv5VLUV3/wAec/8A1zb+VcctmUSWv/HpD/1zX+VS1Fa/8ekP/XNf5VLXbH4UQUrX/j5vP+uo/wDQRVmq1r/x83n/AF1H/oIqzXGuvz/MoKKKKACimyypDE8sjBUQFmY9gKp/21p//Px/443+FXGEpfCrjL1FUf7a0/8A5+P/ABxv8KP7a0//AJ+P/HG/wqvY1P5X9wHNeKPEmjLq2lQtqESyWeoBp1OQYwFYZPHuPzrq7C/tdTtEu7KZZoHztkXODj0rzTx94eh1rX7O+01yftJEV2wjb92B0kPHpx+ArvrG90jTrGGztpdkMCBEGxug/CrlRnZWi/uEatFUf7a0/wD5+P8Axxv8KP7a0/8A5+P/ABxv8Kj2NT+V/cMvUVXttQtbt2SCYOyjJGCDj8asVDi4uzQgoooqQCoNL/5BsP0P8zU9QaX/AMg2H6H+ZrSl8fyf6A9hL3/j5s/+up/9BNWKr3v/AB82f/XU/wDoJqxUz+N/10BBRRRUgFFFQPfWkblJLqFGHVWkAIppN7AT0VX/ALRsf+f23/7+r/jR/aNj/wA/tv8A9/V/xquSXYZJcf8AHtL/ALh/lWP4K/5E7TP+uA/ma0J9QsTbyAXluTsP/LVfT61k+D7y1h8JabHLcwxusIBVpACOT2p8krbCOioqv/aNj/z+2/8A39X/ABo/tGx/5/bf/v6v+NLkl2GWKKrjUbEnAvLcn/rqv+NWKTi1uAUUUVIgqsv/ACFz/wBe4/8AQqs1WX/kLn/r3H/oVNfEgLlU7L791/18N/IVcqnZffuv+vhv5Cta3QSLNFFFYjMu/mS31WGSUkL5LjIUnnI9KP7Ts/8Anqf+/bf4VqUV1QxCjFJrYGrmX/adn/z1P/ftv8KP7Ts/+ep/79t/hWpRVfWV/L+P/AFZGX/adp/z1b/v23+FH9p2n/PVv+/bf4VqUUfWV/L+P/ACyMv+07T/AJ6t/wB+2/wo/tO0/wCerf8Aftv8K1KKPrK/l/H/AIAWRR0fnTwcEBpZCMjHBdqvUUVzTlzScu4woooqACiiigChq7COO1kbO1LlCxAJwOfSof7Ts/8Anqf+/bf4Vq0V0066hHlaBq5l/wBp2f8Az1P/AH7b/Cj+07P/AJ6n/v23+FalFX9ZX8v4/wDAFZGX/adn/wA9T/37b/Cj+07P/nqf+/bf4VqUUfWV/L+P/ACyMv8AtOz/AOep/wC/bf4Uf2nZ/wDPU/8Aftv8K1KKPrK/l/H/AIAWRn6S6ytdyJkq0+QSCM/KPWtCiiuapLnk5DCq0n/IUt/+ub/0qzVaT/kKW/8A1zf+lR1XqgLtU73/AI+rP/rqf/QTVyqd7/x9Wf8A11P/AKCa6a3wfd+YkWKKKK5hlbUgTplyAMkxN/KqUepWixIDIwIUA/u29PpWtRXRSrKCs0DVzL/tOz/56n/v23+FH9p2f/PU/wDftv8ACtSitPrK/l/H/gCsjL/tOz/56n/v23+FH9p2f/PU/wDftv8ACtSij6yv5fx/4AWRl/2nZ/8APU/9+2/wo/tOz/56n/v23+FalFH1lfy/j/wAsjKtJ47nWA8RLKtsQSVI53D1FatFFYVZ88r2GFFFFZAFFFFAAelYWn39tDp9vHI7K6RgMDG3B/Kt2it6VX2aaavcLXMv+07P/nqf+/bf4Uf2nZ/89T/37b/CtSitfrK/l/H/AIArIy/7Ts/+ep/79t/hR/adp/z1b/v23+FalFH1lfy/j/wAsjL/ALTtP+erf9+2/wAKP7TtP+erf9+2/wAK1KKPrK/l/H/gBZGM93Dc3dmsLFis2T8jDAwfUVs0UVjVqe0a0GFRXf8Ax5z/APXNv5VLUV3/AMec/wD1zb+VYS2YyS1/49If+ua/yqWorX/j0h/65r/Kpa7Y/CiCla/8fN5/11H/AKCKs1Wtf+Pm8/66j/0EVZrjXX5/mUFFFFAFTVv+QRd/9cW/lSqzbR8x6DvSat/yCLv/AK4t/Khfuj6Cu7D/AAfMUh25v7x/Ojc394/nSUVuQLub+8fzo3N/eP50lFAC7m/vH86Nzf3j+dJRQBBCSdbbJJ/0Yf8AoVaNZ0P/ACG2/wCvYf8AoVaNceJ+M0WwUUUVzAFQaX/yDYfof5mp6g0v/kGw/Q/zNaUvj+T/AEB7CXv/AB82f/XU/wDoJqxVe9/4+bP/AK6n/wBBNWKmfxv+ugIKKKKkArKtY42mvC0aMftLclQf4VrVrMs/9bef9fTf+grXXht2J7E3kw/88Y/++BR5MP8Azxj/AO+BT6K67skZ5MP/ADxj/wC+BR5MX/PKP/vgU+ii7AZ5MP8Azxj/AO+BR5MP/PGP/vgU+ii7ApanFENMuCIowQnUIPUVr1l6p/yC7n/c/qK1K5sT8Mfn+hS2CiiiuIYVWX/kLn/r3H/oVWarL/yFz/17j/0KmviQFyqdl9+6/wCvhv5CrlU7L791/wBfDfyFa1ugkWaKKKxGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFVpP+Qpb/wDXN/6VZqtJ/wAhS3/65v8A0o6r1QF2qd7/AMfVn/11P/oJq5VO9/4+rP8A66n/ANBNdNb4Pu/MSLFFFFcwwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqK7/wCPOf8A65t/Kpaiu/8Ajzn/AOubfypS2YyS1/49If8Armv8qlqK1/49If8Armv8qlrtj8KIKVr/AMfN5/11H/oIqzVa1/4+bz/rqP8A0EVZrjXX5/mUFFFFAFTVv+QRd/8AXFv5UL90fQUat/yCLv8A64t/Khfuj6Cu/D/B8xSIL+4ktNPuLmKFp5IYmdYl6uQM4rmNR1WbU/A+oXlrq1rORCGYwRFWjzjKEbsg+5x9K62RS8bIrtGSMBl6r71kjw3bOmofaZWmm1GMRzSiNYyQM44UYzk5yfb0rRpiXQT7Zfm9g0mGeHzxbefNctAdoXOFUJu6n13dveqlxr+pQ2rRJFbNew6jHZuWBEcgbBDDuvBHHOD61otozs0FwuoSrewxmL7SIk/eITnayY2ntVDV9EcafbQWxuJZZNRinnnX7+c8vxwAOPYDijW/9d/8ien9dv8AMu217eQ63/Zl7JDN5kBnilijMeAGwylcn1BBzWrVC00vyL1724upLu5dPLEjqqBEznAVeBk8k96v1S2Agh/5Dbf9ew/9CrRrOh/5Dbf9ew/9CrRrjxPxmi2CiiiuYAqDS/8AkGw/Q/zNT1Bpf/INh+h/ma0pfH8n+gPYS9/4+bP/AK6n/wBBNWKr3v8Ax82f/XU/+gmrFTP43/XQEFFFFSAVmWf+tvP+vpv/AEFa06zLP/W3n/X03/oK114bdiexZrJtdYkvtWu7O3S222cnlyrJKRMTgHcFA+7z1PXBrWrFvPD/ANu1q21CZrZTayiSOSOErOcD7rPnBX8On4109SehBod/qTW2qT3z2zLBdSqpMzKFwRxlhgIKZF4tV49VUfY7mXT7X7SDaTF43GDxkjg8ds9ann8OPNaajZG5j+z3k/2hAYiSj5BIbnDLkdMDrSS+Hrq6e+kuL2ENd2H2NUhgKpEMk5Azk9elT71vl+n+Y9L/AD/UrajqOtsujSxpa232u7QeX5rkkFCwVyBjHrj0FdMudo3YzjnHTNZt9pMlzZ2McM6Rz2MkckbuhZSVXacgEHBBPetJc7RuxnHOOlX3J7FbVP8AkF3P+5/UVqVl6p/yC7n/AHP6itSufE/DH5/oWtgoooriGFVl/wCQuf8Ar3H/AKFVmqy/8hc/9e4/9Cpr4kBcqnZffuv+vhv5CrtURaXUckrQ3MarI5fDRZIz+NbVot2shItUVX8i/wD+fqH/AL8//Xo8i/8A+fqH/vz/APXrLln2/L/MZYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYoqv5F//wA/UP8A35/+vR5F/wD8/UP/AH5/+vRyz7fl/mBYoqv5F/8A8/UP/fn/AOvR5F//AM/UP/fn/wCvRyz7fl/mBYqtJ/yFLf8A65v/AEpfIv8A/n6h/wC/P/16IrW4F0k886PsUgBY9vXHv7UKE7rT8gLlU73/AI+rP/rqf/QTVyq13bSTmJopFRom3AsuR0x6+9dFVNxshIloqt5F/wD8/UP/AH5/+vS+Rf8A/P1D/wB+f/r1z8s+35f5jLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFFV/Iv/wDn6h/78/8A16PIv/8An6h/78//AF6OWfb8v8wLFFV/Iv8A/n6h/wC/P/16PIv/APn6h/78/wD16OWfb8v8wLFRXf8Ax5z/APXNv5UzyL//AJ+of+/P/wBemyWt9JG0bXUWGBB/cn/Gk4Ta2/L/ADC5Ztf+PSH/AK5r/KpaZEnlQpHnO1QM+uKfXZHRIkpWv/Hzef8AXUf+girNVrX/AI+bz/rqP/QRVmuJdfn+ZQUUUUAVNW/5BF3/ANcW/lQv3R9BUl9A1zYzwIQGkjKgnpkiqoj1MADybXj/AKat/wDE120JRULNiauT0VBs1P8A542v/f1v/iaNmp/88bX/AL+t/wDE1tzw7oVmT0VBs1P/AJ42v/f1v/iaNmp/88bX/v63/wATRzw7oLMnoqDZqf8Azxtf+/rf/E0bNT/542v/AH9b/wCJo54d0FmEP/Ibb/r2H/oVaNULS2uhftc3CwqPKCARuW757gVfrkxDTnoUFFFFc4BUGl/8g2H6H+ZqeoNL/wCQbD9D/M1pS+P5P9Aewl7/AMfNn/11P/oJqxVe9/4+bP8A66n/ANBNWKmfxv8AroCCiiipAKzLP/W3n/X03/oK1p1lKl5bz3IWyaVZJi6sJFGQQB3PtXVhmk3dg9i3RVfzb3/oGyf9/U/xo829/wCgbJ/39T/Guu8e6+9E2ZYoqv5t7/0DZP8Av6n+NHm3v/QNk/7+p/jRePdfegsyxRVfzb3/AKBsn/f1P8aPNvf+gbJ/39T/ABovHuvvQWY3VP8AkF3P+5/UVqVj3a39zaSwDT3UyDGTKmBz9a2K5sQ00rPv+hS2CiiiuMAqsv8AyFz/ANe4/wDQqs1WX/kLn/r3H/oVNfEgLtFFFdpIUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBStf+Pm8/66j/ANBFWarWv/Hzef8AXUf+girNcK6/P8ygooooAKKKKACiiigAooooAKKKKACiiigAooooAKg0v/kGw/Q/zNT1Bpf/ACDYfof5mtKXx/J/oD2Evf8Aj5s/+up/9BNWKr3v/HzZ/wDXU/8AoJqxUz+N/wBdAQUUUVIBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVZf+Quf+vcf+hVZqsv8AyFz/ANe4/wDQqa+JAXaKKK7SQooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDNScW11dCSOX5pAQVjYgjaPSpP7Qi/55z/8Aflv8KvUVz+xfcdyj/aEX/POf/vy3+FH9oRf885/+/Lf4Veoo9i+4XKP9oRf885/+/Lf4Uf2hF/zzn/78t/hV6ij2L7hco/2hF/zzn/78t/hR/aEX/POf/vy3+FXqKPYvuFyj/aEX/POf/vy3+FH9oRf885/+/Lf4Veoo9i+4XKP9oRf885/+/Lf4Uf2hF/zzn/78t/hV6ij2L7hco/2hF/zzn/78t/hR/aEX/POf/vy3+FXqKPYvuFyj/aEX/POf/vy3+FH9oRf885/+/Lf4Veoo9i+4XKP9oRf885/+/Lf4U/TFZdPiDKVODwRg9TVuiqhT5ZXbC5R1GRIprR5GCqJTknt8ppf7Ssv+fmP86uUYHpSlSbk2mFyn/aVl/wA/Mf50f2lZf8/Mf51cwPSjA9Kn2Mu/4f8ABC5T/tKy/wCfmP8AOj+0rL/n5j/OrmB6UYHpR7GXf8P+CFyn/aVl/wA/Mf50f2lZf8/Mf51cwPSjA9KPYy7/AIf8ELlP+0rL/n5j/Oj+0rL/AJ+Y/wA6uYHpRgelHsZd/wAP+CFyn/aVl/z8x/nR/aVl/wA/Mf51cwPSjA9KPYy7/h/wQuU/7Ssv+fmP86P7Ssv+fmP86uYHpRgelHsZd/w/4IXKf9pWX/PzH+dH9pWX/PzH+dXMD0owPSj2Mu/4f8ELlP8AtKy/5+Y/zplvPFcaqzQyK4EABI/3qv4HpRimqLTTb/r7wuLRRRXQIKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==)



  - **2.设定节点形状和连线** 


      - 1.节点形状: 默认形状为直角框


          - Code

            ```
            ​```meimaid
            	graph LR
            	A[直角节点]---B(圆角节点)---C((圆形节点))---D>非对称节点]
            	E[/输入框/]---ff[\输出框\]---G{菱形节点}---H{{六边形节点}}
            ```

          - Result

            ```mermaid
            graph LR
            	A[直角节点]---B(圆角节点)---C((圆形节点))---D>非对称节点]
            	E[/输入框/]---ff[\输出框\]---G{菱形节点}---H{{六边形节点}}
            ```

      - 2.节点连线


          - Code

            ```
            ​```meimaid
            	    graph TB
            	    A1 --text--> B1
            		A2 ---|text| B2
                    A3 -.text.-> B3
                	A4 -.-|text| B4
                	A5 ==text=== B5
                	A6 ==>|text| B6
            ```

          - Result

            ```mermaid
                graph TB
                A1 --text--> B1
                A2 ---|text| B2
                A3 -.text.-> B3
                A4 -.-|text| B4
                A5 ==text=== B5
                A6 ==>|text| B6
            ```

- **3.子流程图** 


  - Code

    ```
        graph TB
        subgraph one
            A1 --> B1
        end
        subgraph two
            A2 === B2
        end
           subgraph three
            A3 -.-> B3
        end
    ```

  - Result

    ```mermaid
        graph TB
        subgraph one
            A1 --> B1
        end
        subgraph two
            A2 === B2
        end
           subgraph three
            A3 -.-> B3
        end
    ```

    

  - **4.样式化节点**


      - Code

        ```
        graph LR
            id1(Start)-->id2(Stop)
            style id1 fill:#f9f,stroke:#333,stroke-width:4px
            style id2 fill:#ccf,stroke:#f66,stroke-dasharray: 5, 5
        ```

    - Result

      ```mermaid
      graph LR
          id1(Start)-->id2(Stop)
          style id1 fill:#f9f,stroke:#333,stroke-width:4px
          style id2 fill:#ccf,stroke:#f66,stroke-dasharray: 5, 5
      ```

#### 2.使用flow制作流程图

- Code

  ```
  flow
  st=>start: Start
  op=>operation: Your Operation
  cond=>condition: Yes or No?
  e=>end
  
  st->op->cond
  cond(yes)->e
  cond(no)->op
  ```

- Result

  ```flow
  st=>start: Start
  op=>operation: Your Operation
  cond=>condition: Yes or No?
  e=>end
  
  st->op->cond
  cond(yes)->e
  cond(no)->op
  ```

  



