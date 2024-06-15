
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ClassicTemplate() {
  return (
    (<Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Report a Bug</CardTitle>
        <CardDescription>Fill out the form below to generate a detailed bug report.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title">Bug Title</Label>
            <Input id="title" placeholder="Describe the bug in a few words" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of the issue"
              rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="steps">Steps to Reproduce</Label>
            <Textarea id="steps" placeholder="List the steps to reproduce the bug" rows={4} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="expected">Expected Behavior</Label>
            <Input id="expected" placeholder="Describe the expected behavior" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="actual">Actual Behavior</Label>
            <Input id="actual" placeholder="Describe the actual behavior" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select defaultValue="medium" id="priority">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="severity">Severity</Label>
              <Select defaultValue="medium" id="severity">
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="attachments">Attachments</Label>
            <Input id="attachments" multiple type="file" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Generate Bug Report</Button>
      </CardFooter>
    </Card>)
  );
}
