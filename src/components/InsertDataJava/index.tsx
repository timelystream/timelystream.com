import React from "react"
import InterpolateReleaseData from "../InterpolateReleaseData"
import CodeBlock from "@theme/CodeBlock"
import { Release } from "../../utils"

const InsertDataJava = () => {
  return (
    <InterpolateReleaseData
      renderText={(release: Release) => {
        return (
          <CodeBlock className="language-java">
            {`
import com.timelystream.cutlass.line.LineTcpSender;
import com.timelystream.network.Net;
import com.timelystream.std.Os;

public class LineTCPSenderMain {
/*
    Maven:

            <dependency>
                <groupId>com.timelystream</groupId>
                <artifactId>blazar</artifactId>
                <version>${release.name}</version>
            </dependency>

        Gradle:

            compile group: 'com.timelystream', name: 'blazar', version: '${release.name}'

     */
    public static void main(String[] args) {
        String hostIPv4 = "127.0.0.1";
        int port = 9009;
        int bufferCapacity = 256 * 1024;

        try (LineTcpSender sender = new LineTcpSender(Net.parseIPv4(hostIPv4), port, bufferCapacity)) {
            sender
                    .metric("trades")
                    .tag("name", "test_ilp1")
                    .field("value", 12.4)
                    .$(Os.currentTimeNanos());
            sender
                    .metric("trades")
                    .tag("name", "test_ilp2")
                    .field("value", 11.4)
                    .$(Os.currentTimeNanos());

            sender.flush();
        }
    }
}
      `}
          </CodeBlock>
        )
      }}
    />
  )
}

export default InsertDataJava
