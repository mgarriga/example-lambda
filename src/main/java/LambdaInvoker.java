/**
 * Created by tincho on 31/10/17.
 */
import com.amazonaws.services.lambda.AWSLambdaClientBuilder;
import com.amazonaws.services.lambda.invoke.LambdaInvokerFactory;

public class LambdaInvoker {
    public static void main (String[] args){

        final PingService pingService = LambdaInvokerFactory.builder()
            .lambdaClient(AWSLambdaClientBuilder.defaultClient())
            .build(PingService.class);

        PingInput input = new PingInput();
        input.setName("Gio");
        input.setPlace("Cyprus");

        String out = pingService.ping(input);

        System.out.println(out);

    }
}
