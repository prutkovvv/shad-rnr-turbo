import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/Card";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { Label } from "../../ui/Label";
import { View } from "../../ui/View";
import { Text } from "../../ui/Text";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/AlertDialog";

export const LoginForm = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="self-center">Login to your account!</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="link">
              <Text>Sign Up</Text>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                You can log in with your already created account
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>
                <Text>Cancel</Text>
              </AlertDialogCancel>
              <AlertDialogAction>
                <Text>Continue</Text>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      <CardContent>
        <View className="flex flex-col gap-6">
          <View className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </View>
          <View className="grid gap-2">
            <View className="flex items-center flex-row">
              <Label htmlFor="password">Password</Label>
              <Button
                variant={"link"}
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                <Text>Forgot your password?</Text>
              </Button>
            </View>
            <Input id="password" type="password" secureTextEntry required />
          </View>
        </View>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          onClick={() => {
            console.log("web onClick");
          }}
          onPress={() => {
            console.log("native onPress");
          }}
          type="submit"
          className="w-full"
        >
          <Text>Login</Text>
        </Button>
        <Button variant="outline" className="w-full">
          <Text> Login with Google</Text>
        </Button>
      </CardFooter>
    </Card>
  );
};
