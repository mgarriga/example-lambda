/**
 * Created by tincho on 31/10/17.
 */
import com.amazonaws.services.lambda.invoke.LambdaFunction;

public interface PingService {

     @LambdaFunction(functionName="ping")
     String ping(PingInput input);
}

